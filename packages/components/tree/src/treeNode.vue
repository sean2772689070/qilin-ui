<script lang="ts" setup>
import { treeNodeEmits, treeNodeProps } from './tree';
import { createNamespace } from '@qilin-ui/utils';
import { computed } from 'vue';

import QiTreeNodeContent from './tree-node-content';
import QiCheckbox from '../../checkbox/src/checkbox.vue';
import QiIcon from '../../icon/src/icon.vue';

const bem = createNamespace('tree-node');

const props = defineProps(treeNodeProps);

const emit = defineEmits(treeNodeEmits);

const handleExpand = () => {
  emit('toggle', props.node);
};

const isLoading = computed(() => {
  return props.loadingKeys.has(props.node.key);
});

const isSelected = computed(() => {
  return props.selectedKeys?.includes(props.node.key);
});

const handleSelected = () => {
  if (props.node?.disabled) return;
  emit('select', props.node);
};

const handleCheck = (val: boolean) => {
  emit('check', val);
};
</script>

<template>
  <div
    :class="[
      bem.b(),
      bem.is('selected', isSelected),
      bem.is('disabled', node.disabled)
    ]"
  >
    <div
      :class="[bem.e('content')]"
      :style="{ paddingLeft: `${node.level * 16}px` }"
      @click="handleSelected"
    >
      <span
        :class="[
          bem.e('expand-icons'),
          { expanded: expanded && !node.isLeaf },
          bem.is('leaf', node.isLeaf)
        ]"
        @click.stop="handleExpand"
      >
        <qi-icon
          v-if="!node.isLeaf"
          size="1x"
          :icon="!isLoading ? 'search' : 'loading'"
        />
      </span>
      <qi-checkbox
        v-if="showCheckbox"
        :model-value="checked"
        :disabled="disabled"
        :indeterminate="indeterminate"
        @change="handleCheck"
      ></qi-checkbox>
      <span :class="bem.e('label')">
        <qi-tree-node-content :node="node"></qi-tree-node-content>
      </span>
    </div>
  </div>
</template>
