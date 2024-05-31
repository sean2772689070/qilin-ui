import DefaultTheme from 'vitepress/theme';
import './custom.css';

import QiLin from 'qilin-ui';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(QiLin);
  }
};
