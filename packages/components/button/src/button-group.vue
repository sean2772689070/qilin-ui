<script setup lang="ts">
import type { ButtonGroupProps } from './button-group.ts';
import { provide, reactive, toRef } from 'vue';
import { BUTTON_GROUP_CTX_KEY } from './constants.ts';
import { createNamespace } from '@qilin-ui/utils';

defineOptions({
  name: 'QiButtonGroup'
});
const props = defineProps<ButtonGroupProps>();
const bem = createNamespace('button-group');

provide(
  BUTTON_GROUP_CTX_KEY,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
    disabled: toRef(props, 'disabled')
  })
);
</script>

<template>
  <div :class="bem.b()">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/button-group';
</style>
