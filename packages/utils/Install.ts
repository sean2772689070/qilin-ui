import type { App, Plugin } from 'vue';
import { each } from 'lodash-es';

export type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(components: Plugin[]) {
  const installer = (app: App) =>
    each(components, (comp) => app.use(comp as Plugin));
  return installer as Plugin;
}

export function withInstall<T>(comp: T) {
  (comp as SFCWithInstall<T>).install = (app: App<Element>) => {
    const { name } = comp as unknown as { name: string };
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
}
