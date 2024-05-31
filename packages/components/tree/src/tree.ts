import type {
  ExtractPropTypes,
  InjectionKey,
  PropType,
  SetupContext
} from 'vue';

export type Key = string | number;

export interface TreeNode extends Required<TreeOptions> {
  level: number;
  rawNode: TreeOptions;
  children: TreeNode[];
  isLeaf: boolean;
  parentKey: Key | undefined;
}

export interface TreeOptions {
  label?: Key;
  key?: Key;
  children?: TreeOptions[];
  isLeaf?: boolean;
  disabled?: boolean;
  [key: string]: unknown; //任意接口
}

export const treeProps = {
  data: {
    type: Array as PropType<TreeOptions[]>,
    default: () => []
  },
  defaultExpandedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },
  labelField: {
    type: String,
    default: 'label'
  },
  keyField: {
    type: String,
    default: 'key'
  },
  childrenField: {
    type: String,
    default: 'children'
  },
  selectedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },
  selectable: {
    type: Boolean,
    default: true
  },
  multiple: {
    type: Boolean,
    default: false
  },
  defaultCheckedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  onLoad: Function as PropType<(node: TreeOptions) => Promise<TreeOptions[]>>
} as const;

export const treeNodeProps = {
  node: {
    type: Object as PropType<TreeNode>,
    required: true
  },
  expanded: {
    type: Boolean,
    required: true
  },
  loadingKeys: {
    type: Object as PropType<Set<Key>>,
    required: true
  },
  selectedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  checked: Boolean,
  disabled: Boolean,
  indeterminate: Boolean
} as const;

export const treeNodeContentProps = {
  node: {
    type: Object as PropType<TreeNode>,
    required: true
  }
} as const;

export const treeNodeEmits = {
  check: (val: boolean): boolean => val,
  toggle: (node: TreeNode): TreeNode => node,
  select: (node: TreeNode): TreeNode => node
};

export const treeEmits = {
  'update:selectedKeys': (keys: Key[]) => keys
};

export type TreeNodeProps = Partial<ExtractPropTypes<typeof treeNodeProps>>;
export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>;
export type TreeNodeContentProps = Partial<
  ExtractPropTypes<typeof treeNodeContentProps>
>;

export interface TreeContext {
  slots: SetupContext['slots'];
}
// 此变量作为提供出去的属性
export const treeInjectKey: InjectionKey<TreeContext> = Symbol();
