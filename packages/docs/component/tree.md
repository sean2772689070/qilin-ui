# Tree 虚拟化树形控件

不论你的数据量多大，虚拟树都能毫无压力地处理。

## 基础用法

基础的树形结构展示


<script lang="ts" setup>
import Basic from '../examples/tree/basic.vue';
import Field from '../examples/tree/field.vue';
import Check from '../examples/tree/check.vue';
import Asnyc from '../examples/tree/asnyc.vue';
import Disabled from '../examples/tree/disabled.vue';
import Diy from '../examples/tree/diy.vue';
</script>

::: tip 演示

<basic/>
:::

::: details 点击展开代码
<<< @/examples/tree/basic.vue#snippet{1}
:::

## 自定义 key 和 label 的字段

后端会传来各种各样的数据。

::: tip 演示

<field/>
:::

::: details 点击展开代码
<<< @/examples/tree/field.vue#snippet{1}
:::

## 可选择的虚拟树

适用于需要选择层级时使用。

::: tip 演示

<check/>
:::

::: details 点击展开代码
<<< @/examples/tree/check.vue#snippet{1}
:::

## 异步加载

使用 `on-load` 回调来加载数据。异步加载时，所有 `isLeaf` 为 `false` 并且 `children` 不为数组的节点会被视为未加载的节点。

::: tip 演示

<asnyc/>
:::

::: details 点击展开代码
<<< @/examples/tree/asnyc.vue#snippet{1}
:::

## 禁止状态

节点可以设置为禁用。

在示例中，属性在 `defaultProps` 中声明了 `disabled`，一些节点被设置为 `disabled：true`。 相应的节点已禁用，不能点击。

::: tip 演示

<disabled/>
:::

::: details 点击展开代码
<<< @/examples/tree/disabled.vue#snippet{1}
:::

## 自定义节点内容。

节点的内容支持自定义，可以在节点区添加按钮或图标等内容

::: tip 演示

<diy/>
:::

::: details 点击展开代码
<<< @/examples/tree/diy.vue#snippet{1}
:::

## API

### Attributes 属性

| 属性名                 | 说明                                                                                     | 类型                             | 默认值       |
|---------------------|----------------------------------------------------------------------------------------|--------------------------------|-----------|
| data                | 数据	                                                                                    | `string`/ `number` / `boolean` | —         |
| defaultExpandedKeys | 默认展开项	                                                                                 | `Array<string                  | number>`  | [] |
| labelField          | 自定义label名	                                                                             | `string`                       | ''        |
| keyField            | 自定义key名	                                                                               | `string`                       | ''        |
| childrenField       | 自定义childrenField名	                                                                     | `string`                       | ''        |
| on-load             | 异步加载数据的回调函数，如果没有加载到数据你应该让 `Promise resolve false` 或者 `reject` 这个 `Promise`，否则加载动画不会停止	 | `Function`                     | undefined |

### Events 事件

| 事件名                 | 说明            | 类型                                    |
|---------------------|---------------|---------------------------------------|
| update:selectedKeys | 当绑定值变化时触发的事件	 | `Function` : `(keys: Key[]) => keys ` |

### Slots 插槽

| 插槽名 | 说明                                                         |
|-----|------------------------------------------------------------|
| —   | 自定义树节点的内容。 作用域参数为 `{ node: TreeNode, data: TreeNodeData }` |
