# Checkbox 多选框

在一组备选项中进行多选。

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<script lang="ts" setup>
import  Basic from '../examples/checkbox/basic.vue';
import  Disabled from '../examples/checkbox/disabled.vue';
import Border from '../examples/checkbox/border.vue';
</script>


::: tip 演示

<basic/>
:::

::: details 点击展开代码
<<< @/examples/checkbox/basic.vue#snippet{1}
:::

## 禁用状态

多选框不可用状态。

设置 `disabled` 属性即可。

::: tip 演示
<disabled />
:::

::: details 点击展开代码

<<< @/examples/checkbox/disabled.vue#snippet{1}

:::

## 带有边框

设置`border`属性可以渲染为带有边框的多选框。

::: tip 演示
<border />
:::

::: details 点击展开代码

<<< @/examples/checkbox/border.vue#snippet{1}

:::

## Checkbox API

### Checkbox Attributes 属性

| 属性名                   | 说明                | 类型                                     | 默认值   |
|-----------------------|-------------------|----------------------------------------|-------|
| model-value / v-model | 选中项绑定值	           | `string`/ `number` / `boolean`         | —     |
| label                 | 选中状态的值，作为value使用	 | `string`                               | —     |
| tabindex              | 输入框的 tabindex	    | `string`/`number`                      | —     |
| size                  | Checkbox 的尺寸	     | `enum` : 'large' / 'default' / 'small' | —     |
| indeterminate         | 设置不确定状态，仅负责样式控制	  | `boolean`                              | false |
| disabled              | 是否禁用	             | `boolean`                              | false |
| border                | 是否显示边框	           | `boolean`                              | false |
| name                  | 原生 name 属性	       | `string`                               | —     |
| id                    | input id	         | `string`                               | —     |

### Checkbox Events 事件

| 事件名    | 说明            | 类型                                                        |
|--------|---------------|-----------------------------------------------------------|
| change | 当绑定值变化时触发的事件	 | `Function` : (value: string \| number \| boolean) => void |

### Checkbox Slots 插槽

| 插槽名     | 说明      |
|---------|---------|
| default | 自定义默认内容 |
