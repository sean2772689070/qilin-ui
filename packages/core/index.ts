import { makeInstaller } from '@qilin-ui/utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import components from './components.ts';
import '@qilin-ui/theme-chalk/index.scss';
import printfLogo from './printfLogo.ts';

printfLogo();

library.add(fas);

const installer = makeInstaller(components);

export * from '@qilin-ui/components';

export default installer;
