# Icon图标

QiLin-ui 推荐使用 [xicons](https://www.xicons.org/) 作为图标库。

## 使用图标

- 如果你想像用例一样**直接使用**，你需要[注册全局组件](https://vuejs.org/guide/components/registration.html#global-registration)，才可以在项目里使用。

## 安装

### 使用包管理器

::: code-group

```npm
$ npm withInstall @vicons/ionicons5
```

```pnpm
$ pnpm withInstall @vicons/ionicons5
```

:::

## 基础用法

<script setup lang="ts">
import Basic from '../examples/icon/basic.vue'
</script>

::: tip 演示
<basic/>
:::

::: details 点击展开代码
<<< @/examples/icon/basic.vue#snippet{1}
:::



## API

### Attributes 属性

| 属性名 | 说明                        | 类型          | 默认值       |
| ------ | --------------------------- | ------------- | ------------ |
| color  | svg 的 fill 颜色            | `string`        | 继承颜色     |
| size   | SVG 图标的大小，size x size | `string`/`number` | 继承字体大小 |

### Slots 插槽

| 插槽名     | 说明           |
|---------| -------------- |
| default | 自定义默认内容 |
