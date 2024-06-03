<script setup lang="ts">
import { createNamespace, debugWarn } from '@qilin-ui/utils';
import type { CollapseEmits, CollapseProps } from './collapse.ts';
import { provide, ref, watch, watchEffect } from 'vue';
import type { CollapseItemName } from './collapse-item.ts';
import { COLLAPSE_CTX_KEY } from './constants.ts';

const COMP_NAME = 'QiCollapse' as const;

defineOptions({
  name: 'QiCollapse'
});

const bem = createNamespace('collapse');
const props = defineProps<CollapseProps>();
const emit = defineEmits<CollapseEmits>();

const activeNames = ref(props.modelValue);

const handleItemClick = (item: CollapseItemName) => {
  let _activeNames = [...activeNames.value];
  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? '' : item];
    updateActiveNames(_activeNames);
    return;
  }

  const index = _activeNames.indexOf(item);
  if (index > -1) {
    _activeNames.splice(index, 1);
  } else {
    _activeNames.push(item);
  }
  updateActiveNames(_activeNames);
};

const updateActiveNames = (newNames: CollapseItemName[]) => {
  activeNames.value = newNames;
  emit('update:modelValue', newNames);
  emit('change', newNames);
};

watchEffect(() => {
  if (props.accordion && activeNames.value.length > 1) {
    debugWarn(COMP_NAME, 'accordion mode should only have one active item');
  }
});

watch(
  () => props.modelValue,
  (newValue) => updateActiveNames(newValue)
);

provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick
});
</script>

<template>
  <div :class="bem.b()">
    <slot></slot>
  </div>
</template>
