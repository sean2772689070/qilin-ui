<script setup lang="ts">
import type { Key, TreeNode, TreeOptions } from './tree';
import { treeEmits, treeInjectKey, treeProps } from './tree';
import { computed, onMounted, provide, ref, useSlots, watch } from 'vue';
import { createNamespace } from '@qilin-ui/utils';
import QiTreeNode from './treeNode.vue';
import { QiVirtualList } from '@qilin-ui/components/virtual-list';

const bem = createNamespace('tree');

defineOptions({
  name: 'QiTree'
});

const props = defineProps(treeProps);

const tree = ref<TreeNode[]>([]);

// 格式化属性名
const createOptions = (key: string, label: string, children: string) => {
  return {
    getKey(node: TreeOptions) {
      return node[key] as Key;
    },
    getLabel(node: TreeOptions) {
      return node[label] as Key;
    },
    getChildren(node: TreeOptions) {
      return node[children] as TreeOptions[];
    }
  };
};

const treeOptions = createOptions(
  props.keyField,
  props.labelField,
  props.childrenField
);

// 递归格式化
const createTree = (data: TreeOptions[], parent: TreeNode | null = null) => {
  const traversal = (data: TreeOptions[], parent: TreeNode | null = null) => {
    return data.map((node) => {
      const children = treeOptions.getChildren(node) || [];
      const treeNode: TreeNode = {
        key: treeOptions.getKey(node),
        label: treeOptions.getLabel(node),
        children: [],
        rawNode: node,
        level: parent ? parent.level + 1 : 0,
        // 判断节点是否自带isLeaf属性
        isLeaf: node.isLeaf ?? children.length == 0,
        //   判断节点是否不可选中
        disabled: !!node.disabled,
        parentKey: parent?.key
      };
      if (children.length > 0) {
        treeNode.children = traversal(children, treeNode);
      }
      return treeNode;
    });
  };
  return traversal(data, parent);
};

// 监听用户数据变化
watch(
  () => props.data,
  (data: TreeOptions[]) => {
    tree.value = createTree(data);
  },
  { immediate: true }
);

// 需要展开的key有哪些
const expandedKeysSet = ref(new Set(props.defaultExpandedKeys));

const flattenTree = computed(() => {
  // 要展开的key
  const expandedKeys = expandedKeysSet.value;
  // 被拍平后的节点
  const flattenNodes: TreeNode[] = [];
  // 被给时候后的节点
  const nodes = tree.value || [];
  //用于遍历的栈
  const stack: TreeNode[] = [];

  for (let i = nodes.length - 1; i >= 0; --i) {
    stack.push(nodes[i]);
  }
  // 深度遍历
  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;
    flattenNodes.push(node);
    if (expandedKeys.has(node.key)) {
      const children = node.children;
      if (children) {
        for (let i = node.children.length - 1; i >= 0; --i) {
          stack.push(node.children[i]);
        }
      }
    }
  }

  return flattenNodes;
});

const isExpanded = (node: TreeNode): boolean => {
  return expandedKeysSet.value.has(node.key);
};

// 折叠功能
const collapsed = (node: TreeNode) => {
  expandedKeysSet.value.delete(node.key);
};

const loadingKeysRef = ref(new Set<Key>());

const triggerLoading = (node: TreeNode) => {
  if (!node.children.length && !node.isLeaf) {
    // 如果没有加载过这个节点，就加载这个节点
    const loadingKeys = loadingKeysRef.value;
    if (!loadingKeys.has(node.key)) {
      loadingKeys.add(node.key);
      const onLoad = props.onLoad;
      if (onLoad) {
        onLoad(node.rawNode).then((children) => {
          // 修改原来节点
          node.rawNode.children = children;
          // 更新自定义node
          node.children = createTree(children, node);
          // 加载完成
          loadingKeys.delete(node.key);
        });
      }
    }
  }
};

// 展开功能
const expand = (node: TreeNode) => {
  expandedKeysSet.value.add(node.key);

  //   实现对应的记载逻辑
  triggerLoading(node);
};
// 切换功能
const toggleExpand = (node: TreeNode) => {
  const expandKeys = expandedKeysSet.value;
  // 如果正在加载中，不能收起
  if (expandKeys.has(node.key) && !loadingKeysRef.value.has(node.key)) {
    collapsed(node);
  } else {
    expand(node);
  }
};

// 实现选中节点
const emit = defineEmits(treeEmits);

const selectKeysRef = ref<Key[]>([]);

watch(
  () => props.selectedKeys,
  (value) => {
    if (value) {
      selectKeysRef.value = value;
    }
  },
  {
    immediate: true
  }
);

// 处理选中的节点
const handleSelect = (node: TreeNode) => {
  let keys = Array.from(selectKeysRef.value);
  if (!props.selectable) return; //如果不选择就不处理数据
  if (props.multiple) {
    // 多选
    const index = keys.findIndex((key) => key === node.key);
    if (index > -1) {
      keys.splice(index, 1);
    } else {
      keys.push(node.key);
    }
  } else {
    // 单选且选择后只能被另一个选中节点替换
    if (keys.includes(node.key) && !keys.find((key) => key === node.key)) {
      keys = [];
    } else {
      keys = [node.key];
    }
  }
  emit('update:selectedKeys', keys);
};

provide(treeInjectKey, {
  slots: useSlots()
});

const checkedKeyRefs = ref(new Set(props.defaultCheckedKeys));

const isChecked = (node: TreeNode) => {
  return checkedKeyRefs.value.has(node.key);
};

const isDisabled = (node: TreeNode) => {
  return node.disabled;
};

const indeterminateRefs = ref<Set<Key>>(new Set());

const isIndeterminate = (node: TreeNode) => {
  return indeterminateRefs.value.has(node.key);
};

// 自上而下选中
const toggle = (node: TreeNode, checked: boolean) => {
  if (!node) return;
  const checkedKeys = checkedKeyRefs.value;
  if (checked) {
    // 选中后去掉半选状态
    indeterminateRefs.value.delete(node.key);
  }
  checkedKeys[checked ? 'add' : 'delete'](node.key);
  const children = node.children;
  if (children) {
    children.forEach((childNode) => {
      if (!childNode.disabled) {
        toggle(childNode, checked);
      }
    });
  }
};

const findNode = (key: Key) => {
  return flattenTree.value.find((node) => node.key === key);
};

// 自下而上
const updateCheckedKeys = (node: TreeNode) => {
  // 自下而上更新
  if (node?.parentKey) {
    const parentNode = findNode(node.parentKey);

    if (parentNode) {
      let allChecked = true; //默认子节点全选
      let hasChecked = false; //子节点没选中

      const nodes = parentNode.children;
      for (const childNode of nodes) {
        if (checkedKeyRefs.value.has(childNode.key)) {
          hasChecked = true; // 子节点被选中
        } else if (indeterminateRefs.value.has(childNode.key)) {
          allChecked = false;
          hasChecked = true;
        } else {
          allChecked = false;
        }
      }
      if (allChecked) {
        checkedKeyRefs.value.add(parentNode.key);
        indeterminateRefs.value.delete(parentNode.key);
      } else if (hasChecked) {
        checkedKeyRefs.value.delete(parentNode.key);
        indeterminateRefs.value.add(parentNode.key);
      }
      updateCheckedKeys(parentNode);
    }
  }
};

const toggleCheck = (node: TreeNode, checked: boolean) => {
  toggle(node, checked);
  updateCheckedKeys(node);
};

onMounted(() => {
  checkedKeyRefs.value.forEach((key: Key) => {
    toggleCheck(findNode(key)!, true);
  });
});
</script>

<template>
  <div :class="bem.b()">
    <qi-virtual-list :items="flattenTree" :remain="8" :size="30">
      <template #default="{ node }">
        <qi-tree-node
          :key="node.key"
          :node="node"
          :expanded="isExpanded(node)"
          :loading-keys="loadingKeysRef"
          :selected-keys="selectKeysRef"
          :show-checkbox="showCheckbox"
          :checked="isChecked(node)"
          :disabled="isDisabled(node)"
          :indeterminate="isIndeterminate(node)"
          @toggle="toggleExpand"
          @select="handleSelect"
          @check="toggleCheck"
        >
        </qi-tree-node>
      </template>
    </qi-virtual-list>
  </div>
</template>
