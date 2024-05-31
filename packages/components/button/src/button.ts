import type { ExtractPropTypes, PropType } from 'vue';

export type Size = 'small' | 'medium' | 'large';
export type Type =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default';
export type NativeType = 'button' | 'submit' | 'reset';
export type Placement = 'left' | 'right';

export const buttonProps = {
  size: {
    type: String as PropType<Size>,
    default: 'medium'
  },
  type: {
    type: String as PropType<Type>,
    validator: (val: string) => {
      //   校验值
      return [
        'primary',
        'success',
        'warning',
        'danger',
        'info',
        'default'
      ].includes(val);
    },
    default: 'default'
  },
  round: Boolean,
  loading: Boolean,
  disabled: Boolean,
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button'
  },
  iconPlacement: {
    type: String as PropType<Placement>,
    default: 'left'
  }
} as const;

export const buttonEmits = {
  click: (event: MouseEvent) => event instanceof MouseEvent,
  mousedown: (event: MouseEvent) => event instanceof MouseEvent
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;
