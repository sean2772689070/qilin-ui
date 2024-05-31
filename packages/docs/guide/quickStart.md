# 快速开始

## 引入

目前仅支持全局引入

```typescript
// main.ts
import { createApp } from 'vue';
import App from './App.vue';

import Icon from '@qilin-ui/components/icons';
import '@qilin-ui/theme-chalk/src/index.scss';
import Tree from '@qilin-ui/components/tree';
import Checkbox from '@qilin-ui/components/checkbox';
import Switch from '@qilin-ui/components/switch';
import Button from '@qilin-ui/components/button';
import Input from '@qilin-ui/components/input';

const plugins = [Icon, Tree, Checkbox, Switch, Button, Input];

const app = createApp(App);

// app.use注册组件
plugins.forEach((plugin) => app.use(plugin));

app.mount('#app');
```
