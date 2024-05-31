# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量，并绑定`change`事件。 可以使用 `--on-color` 属性与 `--off-color` 属性来设置开关的背景色。

<script lang="ts" setup>
import Basic from '../examples/switch/basic.vue';
import Size from '../examples/switch/size.vue';
import Text from '../examples/switch/text.vue';
import Disabled from '../examples/switch/disabled.vue';
import Loading from '../examples/switch/loading.vue';
import Icon from '../examples/switch/icon.vue';
</script>

::: tip 演示

<basic/>
:::

::: details 点击展开代码
<<< @/examples/switch/basic.vue#snippet{1}
:::

## 尺寸

设置`size`属性，接受一个`enum`，设置`small`|`default`|`large`。

::: tip 演示

<size/>
:::

::: details 点击展开代码
<<< @/examples/switch/size.vue#snippet{1}
:::

## 文字描述

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。

::: tip 演示

<text/>
:::

::: details 点击展开代码
<<< @/examples/switch/text.vue#snippet{1}
:::

## 禁用状态

设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。

::: tip 演示

<disabled/>
:::

::: details 点击展开代码
<<< @/examples/switch/disabled.vue#snippet{1}
:::

## 加载状态

设置`loading`属性，接受一个`Boolea`n，设置`true`即加载中状态。

::: tip 演示

<loading/>
:::


::: details 点击展开代码
<<< @/examples/switch/loading.vue#snippet{1}
:::

## 自定义操作图标

使用 `active-action` 和 `inactive-action` 属性插槽来添加图标，svg图标或者文字都行。

::: tip 演示

<icon/>
:::


::: details 点击展开代码
<<< @/examples/switch/icon.vue#snippet{1}
:::

## API

### Attributes 属性

| 属性名                   | 说明                   | 类型                                     | 默认值   |
|-----------------------|----------------------|----------------------------------------|-------|
| model-value / v-model | 选中项绑定值	              | `string`/ `number` / `boolean`         | —     |
| loading               | 是否显示加载中	             | `boolean`                              | false |
| activeText            | 输入框的 tabindex	       | `string`                               | ''    |
| inactiveText          | switch 的状态为on时的文字描述	 | `string`                               | ''    |
| size                  | Checkbox 的尺寸	        | `enum` : 'large' / 'default' / 'small' | —     |
| disabled              | 是否禁用	                | `boolean`                              | false |

### Events 事件

| 事件名    | 说明            | 类型                                                        |
|--------|---------------|-----------------------------------------------------------|
| change | 当绑定值变化时触发的事件	 | `Function` : (value: string \| number \| boolean) => void |

### Slots 插槽

| 插槽名             | 说明            |
|-----------------|---------------|
| active-action   | 自定义active行为   |
| inactive-action | 自定义inactive行为 |

