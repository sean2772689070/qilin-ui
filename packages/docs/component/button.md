---
title: Button
description: Button 组件文档

next:
  link: /components/collapse
  text: Collapse 折叠面板

prev:
  link: /get-started
  text: 快速开始
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`round` 来定义按钮的样式。


:::preview
demo-preview=../examples/button/basic.vue
:::



## 禁用状态


你可以使用 `disabled` 属性来定义按钮是否被禁用。


使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

:::preview
demo-preview=../examples/button/disabled.vue
:::


## 加载状态按钮


点击按钮来加载数据，并向用户反馈加载状态。


通过设置 `loading` 属性为 `true` 来显示加载中状态。

:::preview
demo-preview=../examples/button/loading.vue
:::


## 调整尺寸


除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。


使用 `size` 属性额外配置尺寸，可使用 `large` 和 `small` 两种值。

:::preview
demo-preview=../examples/button/size.vue
:::


## 自定义图标


您可以使用 `icon` 插槽传入svg组件，自定义您的按钮图标。


`icon-placement`属性用于修改图标位置。

:::preview
demo-preview=../examples/button/icon.vue
:::

## API

### Attributes 属性

| 属性名            | 说明          | 类型                                                                         | 默认值      |
|----------------|-------------|----------------------------------------------------------------------------|----------|
| size           | 尺寸	         | `enum` : 'large' / 'medium' / 'small'                                      | —        |
| type           | 类型	         | `enum` : 'primary' / 'success' / 'warning' / 'danger' / 'info' / 'default' | —        |
| loading        | 是否显示加载中	    | `boolean`                                                                  | false    |
| round          | 是否为圆角按钮     | `boolean`                                                                  | false    |
| disabled       | 是否禁用	       | `boolean`                                                                  | false    |
| native-type    | 原生 type 属性	 | `enum` : 'button' / 'submit' / 'reset'                                     | 'button' |
| icon-placement | 图标所在位置	     | `enum` : 'left' / 'right'                                                  | 'left'   |

### Events 事件

| 事件名       | 说明      | 类型                                                      |
|-----------|---------|---------------------------------------------------------|
| click     | 鼠标点击事件	 | `Function` : `(event: MouseEvent) => <MouseEvent>event` |
| mousedown | 鼠标按下事件	 | `Function` : `(event: MouseEvent) => <MouseEvent>event` |

### Slots 插槽

| 插槽名             | 说明            |
|-----------------|---------------|
| icon            | 自定义icon图标     |

## 贡献者
