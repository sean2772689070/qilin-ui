import type { CollapseItemName } from './collapse-item.ts';
import type { Ref } from 'vue';

export interface CollapseProps {
  modelValue: CollapseItemName[];
  accordion?: boolean;
}

export interface CollapseEmits {
  (e: 'update:modelValue', value: CollapseItemName[]): void;
  (e: 'change', value: CollapseItemName[]): void;
}

export interface CollapseContext {
  activeNames: Ref<CollapseItemName[]>;
  handleItemClick: (name: CollapseItemName) => void;
}
