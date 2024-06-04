<script setup lang="ts">
import { createNamespace } from '@qilin-ui/utils';
import { computed, useSlots } from 'vue';
import type { IconProps } from './icon.ts';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { omit } from 'lodash-es';

defineOptions({
  name: 'QiIcon',
  inheritAttrs: false
});

const bem = createNamespace('icon');

const props = defineProps<IconProps>();
const slots = useSlots();
const filterProps = computed(() => omit(props, ['type', 'color']));
const customStyle = computed(() => ({ color: props.color ?? void 0 }));
</script>

<template>
  <i :class="[bem.b(), bem.m(type)]" :style="customStyle" v-bind="$attrs">
    <font-awesome-icon v-bind="filterProps" />
    <template v-if="slots.icon ?? void 0">
      <slot name="icon"></slot>
    </template>
  </i>
</template>

<style lang="scss" scoped>
@import '../style';
</style>
