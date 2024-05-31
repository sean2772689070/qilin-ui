import type { ExtractPropTypes, PropType } from 'vue';

export type TModelValue = boolean | string | number;

export type TSize = 'large' | 'default' | 'small';
export const switchProps = {
  modelValue: {
    type: [Boolean, String, Number] as PropType<TModelValue>,
    default: false
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  loading: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  activeText: String,
  inactiveText: String,
  size: String as PropType<TSize>
} as const;

export type SwitchProps = Partial<ExtractPropTypes<typeof switchProps>>;

export const switchEmits = {
  'update:modelValue': (value: TModelValue) => value,
  change: (value: boolean) => value
};

export type SwitchEmits = typeof switchEmits;
