import _Collapse from './src/collapse.vue';
import _CollapseItem from './src/collapse-item.vue';
import { withInstall } from '@qilin-ui/utils';

export const QiCollapse = withInstall(_Collapse);
export const QiCollapseItem = withInstall(_CollapseItem);

export * from './src/collapse.ts';
export * from './src/collapse-item.ts';
