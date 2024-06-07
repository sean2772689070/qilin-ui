import { dirname, join } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type {{stories: string[], framework: {name: string, options: {}}, addons: string[]}} */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions')
  ],
  framework: {
    name: getAbsolutePath('@storybook/vue3-vite'),
    options: {}
  },
  addParameters: {
    options: {
      brandTitle: '启林~book',
      brandUrl: 'https://github.com/sean2772689070/qilin-ui',
      brandImage: '../public/logo.png'
    }
  }
};
export default config;
