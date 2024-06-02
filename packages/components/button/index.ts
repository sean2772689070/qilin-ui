import _Button from './src/button.vue';
import _ButtonGroup from './src/button-group.vue';
import { withInstall } from '@qilin-ui/utils';

export const QiButton = withInstall(_Button);
export const QiButtonGroup = withInstall(_ButtonGroup);

export * from './src/button.ts';
export * from './src/button-group.ts';
