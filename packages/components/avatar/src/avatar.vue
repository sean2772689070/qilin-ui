<script setup lang="ts">
import { type AvatarEmits, avatarProps } from './avatar.ts';
import type { AvatarProps } from './avatar.ts';
import { createNamespace } from '@qilin-ui/utils/create.ts';
import type { CSSProperties } from 'vue';
import { computed, ref, useSlots, watch } from 'vue';
import { isString } from 'lodash-es';
import QiIcon from '../../icon/src/icon.vue';

defineOptions({
  name: 'QiAvatar'
});

const bem = createNamespace('avatar');
const props = withDefaults(defineProps<AvatarProps>(), avatarProps);
const emit = defineEmits<AvatarEmits>();

const avatarClass = computed(() => {
  const { size, shape } = props;
  const classList = [bem.b()];
  if (isString(size)) classList.push(bem.m(size));
  if (isString(shape)) classList.push(bem.m(shape));
  return classList;
});

const sizeStyle = computed(() => {
  const { size } = props;
  if (isString(size)) return {};
  return {
    width: size + 'px',
    height: size + 'px'
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

const slots = useSlots();
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
      @error="handleError"
    />
    <qi-icon v-else-if="slots.icon" icon="icon" />
    <slot v-else />
  </span>
</template>
