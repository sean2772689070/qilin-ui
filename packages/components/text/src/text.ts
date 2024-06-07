export type TextType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default';

export type TextSize = 'small' | 'default' | 'large';

export interface TextProps {
  type?: TextType;
  size?: TextSize;
  truncated?: boolean;
  lineClamp?: string | number;
  tag?: string;
}

export const textProps: TextProps = {
  type: 'default',
  size: 'default',
  truncated: false,
  lineClamp: '',
  tag: 'span'
};
