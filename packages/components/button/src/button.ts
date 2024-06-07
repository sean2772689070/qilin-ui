import type { ComputedRef, DefineComponent, Ref } from 'vue';

export type ButtonSize = 'small' | 'default' | 'large';
export type ButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default';
export type NativeType = 'button' | 'submit' | 'reset';
export type Placement = 'left' | 'right';

type ComponentType = DefineComponent; // 或者 VueConstructor, 根据你的Vue版本和库

type IconStyle = {
  marginRight: string;
  marginLeft: string;
};

export interface ButtonProps {
  tag?: string | ComponentType;
  size?: ButtonSize;
  type?: ButtonType;
  icon?: string;
  round?: boolean;
  plain?: boolean;
  circle?: boolean;
  loading?: boolean;
  disabled?: boolean;
  nativeType?: NativeType;
  iconPlacement?: Placement;
  loadingIcon?: string;
  autofocus?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
}

export const buttonProps: ButtonProps = {
  tag: 'button', // 注意这里直接赋值为默认值，而不是包含type和default
  size: 'default',
  type: 'default',
  icon: '',
  round: false,
  plain: false,
  circle: false,
  loading: false,
  disabled: false,
  nativeType: 'button',
  iconPlacement: 'left',
  loadingIcon: 'spinner',
  autofocus: false,
  useThrottle: false,
  throttleDuration: 300
};

export interface ButtonEmits {
  (e: 'click', val: MouseEvent): void;
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>;
  iconStyle: ComputedRef<IconStyle>;
  hasNonNullDefaultSlotContent: ComputedRef<boolean>;
  disabled: ComputedRef<boolean>;
  size: ComputedRef<ButtonSize | ''>;
  type: ComputedRef<ButtonType | ''>;
}
