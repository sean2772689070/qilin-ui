<script setup lang="ts">
import { type AvatarEmits, avatarProps } from './avatar.ts';
import type { AvatarProps } from './avatar.ts';
import { createNamespace } from '@qilin-ui/utils/create.ts';
import type { CSSProperties } from 'vue';
import { computed, ref, watch } from 'vue';
import { isBoolean, isString } from 'lodash-es';
import QiIcon from '../../icon/src/icon.vue';

defineOptions({
  name: 'QiAvatar'
});

const bem = createNamespace('avatar');
const props = withDefaults(defineProps<AvatarProps>(), avatarProps);
const emit = defineEmits<AvatarEmits>();

const avatarClass = computed(() => {
  const { size, round, bordered } = props;
  const classList = [bem.b()];
  if (isString(size)) classList.push(bem.m(size));
  if (isBoolean(round)) classList.push(bem.is('round', round));
  if (isBoolean(bordered)) classList.push(bem.is('bordered', bordered));
  return classList;
});

const sizeStyle = computed(() => {
  const { size, color } = props;
  if (isString(size)) return {};
  if (!isString(color)) return {};
  return {
    width: size + 'px',
    height: size + 'px',
    color: color
  };
});

const fitStyle = computed<CSSProperties>(() => ({
  objectFit: props.fit
}));

const hasLoadError = ref(false);

watch(
  () => props.src,
  () => {
    hasLoadError.value = false;
  }
);

const handleError = (e: Event) => {
  hasLoadError.value = true;
  emit('error', e);
};
</script>

<template>
  <span :class="avatarClass" :style="sizeStyle">
    <img
      v-if="(src || srcSet) && !hasLoadError"
      :class="bem.e('img')"
      :src="src"
      :alt="alt"
      :srcset="srcSet"
      :style="fitStyle"
      :loading="lazy ? 'lazy' : 'eager'"
      @error="handleError"
    />
    <qi-icon v-else-if="hasLoadError" icon="rotate-right" />
    <qi-icon v-else-if="icon && !(src || srcSet)" :icon="icon" />
    <slot v-else />
  </span>
</template>

<style lang="scss" scoped>
@import '../style';
</style>
