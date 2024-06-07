// export type ShapeType = 'circle' | 'square';
// export type FitType = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
// export type SizeType = '' | 'small' | 'default' | 'large' | number;
//
// export const avatarProps = {
//   size: {
//     type: [Number, String] as PropType<SizeType>,
//     default: 'default'
//   },
//   shape: {
//     type: String as PropType<ShapeType>,
//     default: 'circle'
//   },
//   fit: {
//     type: String as PropType<FitType>,
//     default: 'cover'
//   },
//   src: String,
//   srcSet: String,
//   alt: String,
//   icon: String
// } as const;

// export const avatarEmits = {
//   error: (event: Event) => event instanceof Event
// };

export type AvatarSize = 'small' | 'default' | 'large' | number;
export type AvatarShape = 'circle' | 'square';
export type AvatarFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

export interface AvatarProps {
  size?: AvatarSize;
  shape?: AvatarShape;
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
  shape: 'circle',
  src: '',
  srcSet: '',
  alt: '',
  icon: '',
  color: '',
  bordered: false,
  lazy: false,
  fit: 'cover'
};

export interface AvatarEmits {
  (e: 'error', event: Event): void;
}
