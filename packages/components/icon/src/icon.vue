<script setup lang="ts">
import { createNamespace } from '@qilin-ui/utils';
import { iconProps } from './icon';
import { computed } from 'vue';

defineOptions({
  name: 'QiIcon'
});

const bem = createNamespace('icon');

const props = defineProps(iconProps);

const style = computed(() => {
  if (!props.size && !props.color) return {};

  return {
    ...(props.size ? { 'font-size': props.size + 'px' } : {}),
    ...(props.color ? { color: props.color } : {})
  };
});
</script>

<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>
