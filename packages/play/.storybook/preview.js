/** @type {{parameters: {controls: {matchers: {date: RegExp, color: RegExp}}}}} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

// 这里可以全局引入样式、组件等
import 'qilin-ui/dist/theme/index.css';

export const decorators = [
  (story) => {
    return story();
  }
];

export default preview;
