import { makeInstaller } from '@qilin-ui/utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import components from './components.ts';
import '@qilin-ui/theme-chalk/index.scss';

library.add(fas);

const installer = makeInstaller(components);

export * from '../components';

export default installer;
