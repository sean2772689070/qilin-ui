export type AvatarSize = 'small' | 'default' | 'large' | number;
export type AvatarFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

export interface AvatarProps {
  size?: AvatarSize;
  round?: boolean;
  src?: string;
  srcSet?: string;
  alt?: string;
  icon?: string;
  color?: string;
  bordered?: boolean;
  lazy?: boolean;
  fit?: AvatarFit;
}

export const avatarProps: AvatarProps = {
  size: 'default',
  round: false,
  src: '',
  srcSet: '',
  alt: '',
  icon: '',
  color: '',
  bordered: false,
  lazy: true,
  fit: 'cover'
};

export interface AvatarEmits {
  (e: 'error', event: Event): void;
}
