export type LinkType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default'
  | '';
export type Target = '_blank' | '_parent' | '_self' | '_top';

export interface LinkProps {
  type?: LinkType;
  underline?: boolean;
  disabled?: boolean;
  href?: string;
  target?: Target;
  icon?: string;
}

export const linkProps: LinkProps = {
  type: '',
  underline: true,
  disabled: false,
  href: '',
  target: '_blank',
  icon: ''
};

export interface LinkEmits {
  (e: 'click', val: MouseEvent): void;
}
