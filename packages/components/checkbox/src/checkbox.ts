import type { ExtractPropTypes, PropType } from 'vue';

export type TModelValue = boolean | number | string;
export type TTabindex = string | number;
export type TSize = 'large' | 'default' | 'small';

export const checkboxProps = {
  modelValue: {
    type: [Boolean, Number, String] as PropType<TModelValue>,
    default: false
  },
  label: {
    type: String as PropType<string>
  },
  tabindex: [Number, String] as PropType<TTabindex>,
  size: {
    type: String as PropType<TSize>,
    default: 'default'
  },
  indeterminate: Boolean,
  disabled: Boolean,
  border: Boolean,
  name: String,
  id: String
} as const;

export type CheckboxProps = Partial<ExtractPropTypes<typeof checkboxProps>>;

export const checkboxEmits = {
  'update:modelValue': (value: TModelValue) => value,
  change: (value: boolean) => value
};

export type CheckboxEmits = typeof checkboxEmits;
