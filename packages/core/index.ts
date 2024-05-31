import { makeInstaller } from '@qilin-ui/utils';
import components from './components.ts';
import '@qilin-ui/theme-chalk/index.scss';

const installer = makeInstaller(components);

export * from '@qilin-ui/components';

export default installer;
