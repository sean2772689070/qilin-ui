<script setup lang="ts">
import { createNamespace } from '@qilin-ui/utils';
import { buttonEmits, buttonProps } from './button.ts';
import Loading from '@qilin-ui/components/common/icons/Loading.tsx';
import { useSlots } from 'vue';

defineOptions({
  name: 'QiButton',
  inheritAttrs: false
});

const bem = createNamespace('button');
defineProps(buttonProps);
const emit = defineEmits(buttonEmits);

const slots = useSlots();

const emitClick = (e: MouseEvent) => {
  emit('click', e);
};

const emitMousedown = (e: MouseEvent) => {
  emit('mousedown', e);
};
</script>

<template>
  <button
    :class="[
      bem.b(),
      bem.m(type),
      bem.m(size),
      bem.is('round', round),
      bem.is('loading', loading),
      bem.is('disabled', disabled)
    ]"
    :type="nativeType"
    :disabled="disabled || loading"
    @click="emitClick"
    @mousedown="emitMousedown"
  >
    <template v-if="iconPlacement === 'left'">
      <qi-icon v-if="loading" :class="bem.e('loading')">
        <loading></loading>
      </qi-icon>
      <qi-icon v-if="!loading && slots.icon">
        <component :is="slots.icon"> </component>
      </qi-icon>
    </template>
    <slot></slot>
    <template v-if="iconPlacement === 'right'">
      <qi-icon v-if="loading" :class="bem.e('loading')">
        <loading></loading>
      </qi-icon>
      <qi-icon v-if="!loading && slots.icon">
        <component :is="slots.icon"> </component>
      </qi-icon>
    </template>
  </button>
</template>
