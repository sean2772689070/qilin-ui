# Input 输入框

通过鼠标或键盘输入字符

:::danger 警告
Input 为受控组件，它 **总会显示 Vue 绑定值**。

在正常情况下，`input` 的输入事件应该被正常响应。 它的处理程序应该更新组件的绑定值 (或使用 `v-model`)。 否则，输入框的值将不会改变。

不支持 `v-model` 修饰符。
:::

## 基础用法

<script lang="ts" setup>
import Basic from '../examples/input/basic.vue';
import Disabled from '../examples/input/disabled.vue';
import Clearable from '../examples/input/clearable.vue';
import Icon from '../examples/input/icon.vue';
import Psw from '../examples/input/psw.vue';
import Compound from '../examples/input/compound.vue';
</script>

::: tip 演示

<basic/>
:::

::: details 点击展开代码
<<< @/examples/input/basic.vue#snippet{1}
:::

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

::: tip 演示

<disabled/>
:::

::: details 点击展开代码
<<< @/examples/input/disabled.vue#snippet{1}
:::

## 一键清空

使用 `clearable` 属性即可得到一个可一键清空的输入框

::: tip 演示

<clearable/>
:::

::: details 点击展开代码
<<< @/examples/input/clearable.vue#snippet{1}
:::

## 密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

::: tip 演示

<psw/>
:::

::: details 点击展开代码
<<< @/examples/input/psw.vue#snippet{1}
:::

## 自定义图标

使用 `slot` 来指定在 Input 中前置或者后置的图标。

::: tip 演示

<icon/>
:::

::: details 点击展开代码
<<< @/examples/input/icon.vue#snippet{1}
:::

## 复合型输入框

可以在输入框中前置或后置一个元素，通常是标签或按钮。

可通过 `slot` 来指定在 Input 中分发的前置或者后置的内容。

::: tip 演示

<compound/>
:::

::: details 点击展开代码
<<< @/examples/input/compound.vue#snippet{1}
:::

## API

### Attributes 属性

| 属性名                   | 说明                                  | 类型                                                                                                              | 默认值   |
|-----------------------|-------------------------------------|-----------------------------------------------------------------------------------------------------------------|-------|
| model-value / v-model | 绑定值	                                | `string`/`number`                                                                                               | —     |
| type                  | 类型	                                 | `string` 等 [input 原生类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | —     |
| placeholder           | 输入框占位文本	                            | `string`                                                                                                        | —     |
| clearable             | 是否显示清除按钮，只有当 type 不是 `textarea` 时生效 | `boolean`                                                                                                       | false |
| disabled              | 是否禁用	                               | `boolean`                                                                                                       | false |
| show-password         | 是否显示切换密码图标	                         | `boolean`                                                                                                       | false |
| readonly              | 原生 `readonly` 属性，是否只读	              | `boolean`                                                                                                       | false |
| label                 | 等价于原生 input `aria-label` 属性	        | `string`                                                                                                        | —     |

### Events 事件

| 事件名    | 说明                             | 类型                                                |
|--------|--------------------------------|---------------------------------------------------|
| input  | 在 Input 值改变时触发	                | `Function` : `(value: string) => isString(value)` |
| change | 仅当 modelValue 改变时触发	           | `Function` : `(value: string) => isString(value)` |
| focus  | 当选择器的输入框获得焦点时触发	               | `Function` : `(e: FocusEvent) => <FocusEvent>e `  |
| blur   | 当选择器的输入框失去焦点时触发	               | `Function` : `(e: FocusEvent) => <FocusEvent>e `  |
| clear  | 在点击由 `clearable` 属性生成的清空按钮时触发	 | `Function` : `() => void`                         |

### Slots 插槽

| 插槽名      | 说明                               |
|----------|----------------------------------|
| prefix	  | 输入框头部内容，只对非 `type="textarea"` 有效 |
| suffix	  | 输入框尾部内容，只对非 `type="textarea"` 有效 |
| prepend	 | 输入框前置内容，只对非 `type="textarea"` 有效 |
| append	  | 输入框后置内容，只对非 `type="textarea"` 有效 |
