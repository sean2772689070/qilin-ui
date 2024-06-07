<script setup lang="ts">
import { createNamespace } from '@qilin-ui/utils';
import type {
  ButtonEmits,
  ButtonInstance,
  ButtonProps,
  ButtonSize,
  ButtonType
} from './button.ts';
import { buttonProps } from './button.ts';
import { computed, type ComputedRef, inject, ref } from 'vue';
import { throttle } from 'lodash-es';

import QiIcon from '../../icon/src/icon.vue';
import { BUTTON_GROUP_CTX_KEY } from './constants.ts';

defineOptions({
  name: 'QiButton'
});

const bem = createNamespace('button');
const props = withDefaults(defineProps<ButtonProps>(), {
  ...buttonProps
});
const emit = defineEmits<ButtonEmits>();

const slots = defineSlots();

const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0);
const _ref = ref<HTMLButtonElement>();
const size = computed(() => {
  const sizeValue = ctx?.size ?? props?.size;
  return sizeValue !== undefined ? (sizeValue as ButtonSize) : '';
});

const type = computed(() => {
  const typeValue = ctx?.type ?? props?.type;
  return typeValue !== undefined ? (typeValue as ButtonType) : '';
});
const disabled = computed(() => ctx?.disabled || props?.disabled || false);

const hasNonNullDefaultSlotContent = computed(() => {
  if (typeof slots.default === 'function') {
    const slotContent = slots.default();
    return Array.isArray(slotContent)
      ? slotContent.some((node) =>
          Boolean(node.text || (node.children && node.children.length))
        )
      : Boolean(
          slotContent.text ||
            (slotContent.children && slotContent.children.length)
        );
  }
  return false;
});

const iconStyle = computed(() => ({
  marginRight:
    hasNonNullDefaultSlotContent.value && props.iconPlacement === 'left'
      ? '6px'
      : '0px',
  marginLeft:
    hasNonNullDefaultSlotContent.value && props.iconPlacement === 'right'
      ? '6px'
      : '0px'
}));

const handleBtnClick = (e: MouseEvent) => emit('click', e);
const handleBtnClickThrottle = throttle(
  handleBtnClick,
  props.throttleDuration,
  { trailing: false }
);

defineExpose<ButtonInstance>({
  ref: _ref,
  hasNonNullDefaultSlotContent,
  iconStyle,
  disabled,
  type,
  size
});
</script>

<template>
  <component
    :is="props.tag"
    ref="_ref"
    :autofocus="autofocus"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="[
      bem.b(),
      bem.m(`${type}-type`),
      bem.m(`${size}-size`),
      bem.m(`${iconPlacement}-icon`),
      bem.is('round', round),
      bem.is('plain', plain),
      bem.is('circle', circle),
      bem.is('loading', loading),
      bem.is('disabled', disabled)
    ]"
    @click="
      (e: MouseEvent) =>
        useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)
    "
  >
    <template v-if="iconPlacement === 'left'">
      <template v-if="loading">
        <slot name="loading">
          <qi-icon
            :class="bem.e('loading-icon')"
            :icon="loadingIcon ?? 'spinner'"
            :style="iconStyle"
            size="1x"
            spin
          >
          </qi-icon>
        </slot>
      </template>
      <qi-icon
        v-if="icon && !loading"
        :icon="icon"
        :style="iconStyle"
        size="1x"
      />
    </template>

    <slot></slot>

    <template v-if="iconPlacement === 'right'">
      <template v-if="loading">
        <slot name="loading">
          <qi-icon
            :class="bem.e('loading-icon')"
            :icon="loadingIcon ?? 'spinner'"
            :style="iconStyle"
            size="1x"
            spin
          >
          </qi-icon>
        </slot>
      </template>
      <qi-icon
        v-if="icon && !loading"
        :icon="icon"
        :style="iconStyle"
        size="1x"
      />
    </template>
  </component>
</template>

<style lang="scss" scoped>
@import '../style';
</style>
