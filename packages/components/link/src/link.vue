<script setup lang="ts">
import { createNamespace } from '@qilin-ui/utils';
import type { LinkEmits, LinkProps } from './link.ts';
import { linkProps } from './link.ts';
import QiIcon from '../../icon/src/icon.vue';

defineOptions({
  name: 'QiLink',
  inheritAttrs: false
});

const bem = createNamespace('link');
const props = withDefaults(defineProps<LinkProps>(), linkProps);
const emit = defineEmits<LinkEmits>();

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) emit('click', event);
};
</script>

<template>
  <a
    :class="[
      bem.b(),
      bem.m(type),
      bem.is('underline', underline),
      bem.is('disabled', disabled)
    ]"
    :href="disabled || !href ? void 0 : href"
    :target="disabled || !href ? void 0 : target"
    @click="handleClick"
  >
    <qi-icon v-if="icon" :icon="icon"></qi-icon>
    <span v-if="$slots.default" :class="bem.e('inner')">
      <slot />
    </span>

    <slot v-if="$slots.icon" name="icon" />
  </a>
</template>

<style lang="scss" scoped>
@import '../style';
</style>
