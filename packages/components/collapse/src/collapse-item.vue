<script setup lang="ts">
import { createNamespace } from '@qilin-ui/utils';
import { collapseItemProps, type CollapseItemProps } from './collapse-item.ts';
import { computed, inject } from 'vue';
import { COLLAPSE_CTX_KEY } from './constants.ts';
import QiIcon from '../../icon/src/icon.vue';
import transitionEvents from './transitionEvents.ts';

defineOptions({
  name: 'QiCollapseItem'
});
const bem = createNamespace('collapse-item');
const props = withDefaults(defineProps<CollapseItemProps>(), collapseItemProps);

const ctx = inject(COLLAPSE_CTX_KEY, void 0);
const isActive = computed(() => ctx?.activeNames.value?.includes(props.name));

const handleClick = () => {
  if (props.disabled) return;
  ctx?.handleItemClick(props.name);
};
</script>

<template>
  <div :class="[bem.b(), bem.is('disabled', disabled)]">
    <div
      :id="`item-header-${name}`"
      :class="[
        bem.e('header'),
        bem.is('disabled', disabled),
        bem.is('active', isActive!)
      ]"
      @click="handleClick"
    >
      <span :class="bem.e('title')">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <qi-icon icon="angle-right" class="header-angle" />
    </div>
    <transition name="slide" v-on="transitionEvents">
      <div v-show="isActive" :class="bem.e('wrapper')">
        <div :id="`item-content-${name}`" :class="bem.e('content')">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/collapse-item';
</style>
