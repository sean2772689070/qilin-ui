<script setup lang="ts">
import { createNamespace } from '@qilin-ui/utils';
import { textProps } from './text.ts';
import type { TextProps } from './text.ts';
import { computed } from 'vue';

defineOptions({
  name: 'QiText'
});

const bem = createNamespace('text');
const props = withDefaults(defineProps<TextProps>(), textProps);

const isLineClamp = computed(
  () => !(props.lineClamp === '' || isNaN(props.lineClamp as number))
);
</script>

<template>
  <component
    :is="tag"
    :class="[
      bem.b(),
      bem.m(`${type}-type`),
      bem.m(`${size}-size`),
      bem.is('truncated', truncated),
      bem.is('line-clamp', isLineClamp)
    ]"
    :style="{ '-webkit-line-clamp': lineClamp }"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
@import '../style';
</style>
