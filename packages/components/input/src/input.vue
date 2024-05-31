<script setup lang="ts">
import {
  computed,
  nextTick,
  onMounted,
  ref,
  useAttrs,
  useSlots,
  watch
} from 'vue';
import { createNamespace } from '@qilin-ui/utils';
import { inputEmits, inputProps } from './input.ts';
import ShowPasswordTrue from '@qilin-ui/components/common/icons/ShowPasswordTrue.tsx';
import ShowPasswordFalse from '@qilin-ui/components/common/icons/ShowPasswordFalse.tsx';
import InputClear from '@qilin-ui/components/common/icons/InputClear.tsx';

defineOptions({
  name: 'QiInput',
  inheritAttrs: false
});

const bem = createNamespace('input');
const props = defineProps(inputProps);
const emit = defineEmits(inputEmits);
const slots = useSlots();
const attrs = useAttrs();

// 监控value变化
watch(
  () => props.modelValue,
  () => {
    setNativeInputValue();
  }
);

const inputRef = ref<HTMLInputElement | null>();

const setNativeInputValue = () => {
  const inputEle = inputRef.value;
  if (!inputEle) return;
  inputEle.value = String(props.modelValue);
};

const focus = async () => {
  await nextTick(); //重新获取焦点
  inputRef.value?.focus();
};

const passwordVisible = ref(false);
const handlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value;
  focus();
};

const showPwdVisible = computed(() => {
  return (
    props.modelValue && props.showPassword && !props.disabled && !props.readonly
  );
});

const showClear = computed(() => {
  return (
    props.modelValue &&
    props.clearable &&
    !props.showPassword &&
    !props.disabled &&
    !props.readonly
  );
});

const handleClear = () => {
  emit('input', '');
  emit('update:modelValue', '');
  emit('clear');
  focus();
};

onMounted(() => {
  setNativeInputValue();
});

const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  emit('input', value);
  emit('update:modelValue', value); //触发事件实现双向绑定
};

const handleChange = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  emit('change', value);
};

const handleBlur = (e: FocusEvent) => {
  emit('blur', e);
};

const handleFocus = (e: FocusEvent) => {
  emit('focus', e);
};
</script>

<template>
  <div :class="[bem.b()]">
    <div :class="[bem.e('group')]">
      <div v-if="slots.prepend" :class="bem.be('group', 'prepend')">
        <slot name="prepend"></slot>
      </div>

      <div :class="[bem.e('wrapper')]">
        <span v-if="slots.prefix" :class="bem.e('prefix')">
          <slot name="prefix"></slot>
        </span>
        <!--        如果需要显示密码，判断当前是普通文本还是密码-->
        <input
          v-bind="attrs"
          ref="inputRef"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          :class="[bem.e('inner'), bem.is('disabled', disabled)]"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          @input="handleInput"
          @change="handleChange"
          @blur="handleBlur"
          @focus="handleFocus"
        />
        <span v-if="slots.suffix" :class="bem.e('suffix')">
          <slot name="suffix"></slot>
        </span>
        <qi-icon
          v-if="showPwdVisible"
          style="cursor: pointer; fill: #a9abb2; margin-right: 3px"
          @click="handlePasswordVisible"
        >
          <show-password-true v-if="passwordVisible"></show-password-true>
          <show-password-false v-else></show-password-false>
        </qi-icon>
        <qi-icon
          v-if="showClear"
          style="cursor: pointer; fill: #a9abb2; margin-right: 3px"
          @click="handleClear"
        >
          <input-clear></input-clear>
        </qi-icon>
      </div>

      <div v-if="slots.append" :class="bem.be('group', 'append')">
        <slot name="append"></slot>
      </div>
    </div>
  </div>
</template>
