<script setup lang="ts">
import { createNamespace } from '@qilin-ui/utils/create.ts';
import type { TModelValue } from './switch.ts';
import { switchProps } from './switch.ts';
import { computed } from 'vue';
import Loading from '@qilin-ui/components/common/icons/Loading.tsx';

defineOptions({
  name: 'QiSwitch'
});

const bem = createNamespace('switch');
const props = defineProps(switchProps);
const emit = defineEmits(['update:modelValue', 'change']);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(val: TModelValue) {
    return emit('update:modelValue', val);
  }
});

const handleChange = () => {
  emit('change', model);
};

const sizeComputed = computed(() => {
  if (!props.size) return 'default';
  return props.size;
});
</script>

<template>
  <div
    :class="[
      bem.b(),
      bem.e(sizeComputed),
      bem.is('model', model as boolean),
      bem.is('disabled', disabled),
      bem.is('loading', loading)
    ]"
  >
    <span v-if="activeText" :class="bem.e('active-action-text')">
      {{ activeText }}
    </span>
    <button
      :disabled="disabled || loading"
      :class="bem.e('bg')"
      @click="handleChange"
    >
      <span :class="bem.e('circle')">
        <qi-icon v-if="loading">
          <Loading />
        </qi-icon>
        <qi-icon v-if="model && !loading">
          <slot name="active-action"> </slot>
        </qi-icon>
        <qi-icon v-if="!model && !loading">
          <slot name="inactive-action"> </slot>
        </qi-icon>
      </span>
    </button>
    <span v-if="inactiveText" :class="bem.e('inactive-action-text')">
      {{ inactiveText }}
    </span>
  </div>
</template>
