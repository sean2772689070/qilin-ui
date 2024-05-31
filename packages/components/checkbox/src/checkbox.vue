<script lang="ts" setup>
import { createNamespace } from '@qilin-ui/utils';
import type { TModelValue } from './checkbox.ts';
import { checkboxProps } from './checkbox.ts';
import { computed, onMounted, ref, watch } from 'vue';

defineOptions({
  name: 'QiCheckbox'
});

const bem = createNamespace('checkbox');
const props = defineProps(checkboxProps);
const emit = defineEmits(['update:modelValue', 'change']);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(val: TModelValue) {
    return emit('update:modelValue', val);
  }
});

const inputRef = ref<HTMLInputElement>();
const indeterminate = (val: boolean) => {
  inputRef.value!.indeterminate = val;
};
const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const value = target.checked;
  emit('change', value);
};
watch(() => props.indeterminate, indeterminate);

onMounted(() => {
  indeterminate(props.indeterminate);
});

const sizeComputed = computed(() => {
  if (!props.size) return 'default';
  return props.size;
});
</script>

<template>
  <label
    :class="[
      bem.b(),
      bem.is('disabled', disabled),
      bem.e(sizeComputed),
      bem.is('border', border)
    ]"
    :style="{
      color: model ? '#768BB5' : '#606266',
      borderColor: model ? '#768BB5' : '#DDDFE6'
    }"
  >
    <span :class="bem.e('input')">
      <input
        :id="id"
        ref="inputRef"
        v-model="model"
        type="checkbox"
        :disabled="disabled"
        :value="label"
        :name="name"
        :tabindex="tabindex"
        :border="border"
        @click.stop="handleChange"
      />
    </span>
    <span v-if="$slots.default || label" :class="bem.e('label')">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
