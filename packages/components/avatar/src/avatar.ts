import type { ExtractPropTypes, PropType } from 'vue';

export type ShapeType = 'circle' | 'square';
export type FitType = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
export type SizeType = '' | 'small' | 'medium' | 'large' | number;

export const avatarProps = {
  size: {
    type: [Number, String] as PropType<SizeType>,
    default: 'medium'
  },
  shape: {
    type: String as PropType<ShapeType>,
    default: 'circle'
  },
  fit: {
    type: String as PropType<FitType>,
    default: 'cover'
  },
  src: String,
  srcSet: String,
  alt: String
} as const;

export const avatarEmits = {
  error: (event: Event) => event instanceof Event
};

export type AvatarProps = ExtractPropTypes<typeof avatarProps>;
export type AvatarEmits = typeof avatarEmits;
