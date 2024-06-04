# 快速开始

## 引入

目前支持全局引入和按需引入。

### 全局引入

全局引入需要引入组件库的样式文件。

```typescript
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
// 全局引入组件
import QiLin from 'qilin-ui';
//全局引入组件样式
import 'qilin-ui/dist/index.css';

const app = createApp(App);

// 挂载到app上
app.use(QiLin).mount('#app');
```
```vue
<template>
  <qi-button>按钮</qi-button>
</template>
```

### 按需引入(推荐)

按需引入会根据项目中实际引入的组件进行打包，不引入的组件会被移除。

```typescript
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
//全局引入公共样式
import 'qilin-ui/dist/theme/index.css';

createApp(App).mount('#app');
```
```vue
// App.vue
<script setup lang="ts">
import { QiButton } from 'qilin-ui';
import 'qilin-ui/dist/theme/button.css';
</script>

<template>
<qi-button>按钮</qi-button>
</template>
```
