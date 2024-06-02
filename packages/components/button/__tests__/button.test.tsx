import { describe, it, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import type { NativeType, ButtonSize, ButtonType } from '../src/button';
import { createVNode } from 'vue';

import Icon from '../../icon/src/icon.vue';
import Button from '../src/button.vue';
import ButtonGroup from '../src/button-group.vue';

describe('Button.vue', () => {
  const onClick = vi.fn();
  // basic button
  test('basic button', async () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
        onClick
      },
      slots: { default: 'basic button' }
    });

    // class
    expect(wrapper.classes()).toContain('qi-button--primary-type');

    // slot
    expect(wrapper.get('button').text()).toBe('basic button');

    // events
    await wrapper.get('button').trigger('click');
    expect(onClick).toHaveBeenCalledOnce();
  });

  // disabled button
  test('disabled button', async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
        onClick
      },
      slots: { default: 'disabled button' }
    });

    // class
    expect(wrapper.classes()).toContain('is-disabled');

    // attrs
    expect(wrapper.attributes('disabled')).toBeDefined();
    expect(wrapper.find('button').element.disabled).toBeTruthy();

    // events
    await wrapper.get('button').trigger('click');
    expect(onClick).toHaveBeenCalledOnce();
    expect(wrapper.emitted('click')).toBeUndefined();
  });

  // loading button
  test('loading button', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      },
      slots: {
        default: 'loading button'
      },
      global: {
        stubs: ['QiIcon']
      }
    });

    // class
    expect(wrapper.classes()).toContain('is-loading');

    // attrs
    expect(wrapper.attributes('disabled')).toBeDefined();
    expect(wrapper.find('button').element.disabled).toBeTruthy();

    // events
    wrapper.get('button').trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('click');

    // icon
    const iconElement = wrapper.findComponent(Icon);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes('icon')).toBe('spinner');
  });

  // icon button
  test('icon button', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'arrow-up'
      },
      slots: {
        default: 'icon button'
      },
      global: {
        stubs: ['QiIcon']
      }
    });

    const iconElement = wrapper.findComponent(Icon);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes('icon')).toBe('arrow-up');
  });

  // Props: type
  const types: ButtonType[] = [
    'primary',
    'success',
    'warning',
    'danger',
    'info',
    'default'
  ];
  types.forEach((type) => {
    const wrapper = mount(Button, {
      props: { type }
    });
    expect(wrapper.classes()).toContain(`qi-button--${type}-type`);
  });

  // Props: size
  it('should has the correct size class when size prop is set', () => {
    const sizes: ButtonSize[] = ['large', 'default', 'small'];
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size }
      });
      expect(wrapper.classes()).toContain(`qi-button--${size}-size`);
    });
  });

  // Props: plain, round, circle
  it.each([
    ['plain', 'is-plain'],
    ['round', 'is-round'],
    ['circle', 'is-circle'],
    ['disabled', 'is-disabled'],
    ['loading', 'is-loading']
  ])(
    'should has the correct class when prop %s is set to true',
    (prop, className) => {
      const wrapper = mount(Button, {
        props: { [prop]: true },
        global: {
          stubs: ['QiIcon']
        }
      });
      expect(wrapper.classes()).toContain(className);
    }
  );

  // props native-type
  it('should has the correct native type attribute when native-type prop is set', () => {
    const nativeTypes: NativeType[] = ['button', 'submit', 'reset'];
    nativeTypes.forEach((nativeType) => {
      const wrapper = mount(Button, {
        props: { nativeType }
      });
      expect(wrapper.element.tagName).toBe('BUTTON');
      expect((wrapper.element as HTMLButtonElement).type).toBe(nativeType);
    });
  });

  // Props: tag
  it('should renders the custom tag when tag prop is set', () => {
    const wrapper = mount(Button, {
      props: { tag: 'a' }
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe('a');
  });

  test('renders icon correctly based on iconPlacement', async () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'arrow-up',
        iconPlacement: 'left', // 设置图标位置为左
        onClick
      },
      global: {
        components: {
          Icon
        }
      }
    });

    // 等待组件渲染完成
    await wrapper.vm.$nextTick();

    // 检查左侧图标
    const leftIconWrapper = wrapper.find('.qi-button--left-icon .qi-icon');
    expect(leftIconWrapper.exists()).toBeTruthy();

    // 更改图标位置
    await wrapper.setProps({ iconPlacement: 'right' });

    // 再次等待组件渲染完成
    await wrapper.vm.$nextTick();

    // 检查右侧图标
    const rightIconWrapper = wrapper.find('.qi-button--right-icon .qi-icon');
    expect(rightIconWrapper.exists()).toBeTruthy();
  });

  // Events: basic click
  it('should emits a click event when the button is clicked', async () => {
    const wrapper = mount(Button, {});
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toHaveLength(1);
  });

  // Test the click event with and without throttle
  it.each([
    ['withoutThrottle', false],
    ['withThrottle', true]
  ])('%s should emit click event properly', async (scenario, useThrottle) => {
    const clickSpy = vi.fn();

    // 使用mount挂载组件，并传递props
    const wrapper = mount(Button, {
      props: {
        onClick: clickSpy,
        useThrottle,
        throttleDuration: useThrottle ? 400 : undefined // 只有当useThrottle为真时才设置throttleDuration
      }
    });

    // 触发点击事件
    await wrapper.find('button').trigger('click');

    // 验证回调函数是否被调用
    expect(clickSpy).toHaveBeenCalled();
  });

  // Exception Handling: loading state
  it('should display loading icon and not emit click event when button is loading', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      global: {
        stubs: ['QiIcon']
      }
    });
    const iconElement = wrapper.findComponent(Icon);

    expect(wrapper.find('.qi-button__loading-icon').exists()).toBe(true);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes('icon')).toBe('spinner');
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });

  // 测试 hasNonNullDefaultSlotContent 计算属性
  test('hasNonNullDefaultSlotContent with no default slot content', async () => {
    const wrapper = mount(Button, {
      slots: {}
    });
    expect(wrapper.vm.hasNonNullDefaultSlotContent).toBe(false);
  });

  test('hasNonNullDefaultSlotContent with text in default slot', async () => {
    const wrapper = mount(Button, {
      slots: { default: 'Text Content' }
    });
    expect(wrapper.vm.hasNonNullDefaultSlotContent).toBe(true);
  });

  test('hasNonNullDefaultSlotContent with multiple nodes including non-empty', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: () => [createVNode('span'), createVNode('span', {}, 'Text')]
      }
    });
    expect(wrapper.vm.hasNonNullDefaultSlotContent).toBe(true);
  });

  test('hasNonNullDefaultSlotContent with single VNode with text', async () => {
    const wrapper = mount(Button, {
      slots: { default: () => createVNode('span', {}, 'Text') }
    });
    expect(wrapper.vm.hasNonNullDefaultSlotContent).toBe(true);
  });

  test('hasNonNullDefaultSlotContent with single VNode with children', async () => {
    const wrapper = mount(Button, {
      slots: { default: () => createVNode('span', {}, ['Child']) }
    });
    expect(wrapper.vm.hasNonNullDefaultSlotContent).toBe(true);
  });

  // 测试 iconStyle 计算属性
  test('iconStyle with no default slot content', async () => {
    const wrapper = mount(Button, {
      props: { iconPlacement: 'left' },
      slots: {}
    });
    expect(wrapper.vm.iconStyle.marginRight).toBe('0px');
    expect(wrapper.vm.iconStyle.marginLeft).toBe('0px');
  });

  test('iconStyle with default slot content and iconPlacement left', async () => {
    const wrapper = mount(Button, {
      props: { iconPlacement: 'left' },
      slots: { default: 'Text' }
    });
    expect(wrapper.vm.iconStyle.marginRight).toBe('6px');
  });

  test('iconStyle with default slot content and iconPlacement right', async () => {
    const wrapper = mount(Button, {
      props: { iconPlacement: 'right' },
      slots: { default: 'Text' }
    });
    expect(wrapper.vm.iconStyle.marginLeft).toBe('6px');
  });
});

describe('ButtonGroup.vue', () => {
  test('basic button group', async () => {
    const wrapper = mount(ButtonGroup, {
      slots: {
        default: [
          { template: '<Button>button 1</Button>' },
          { template: '<Button>button 2</Button>' }
        ]
      }
    });

    expect(wrapper.classes()).toContain('qi-button-group');
  });

  test('button group size', () => {
    const sizes = ['large', 'default', 'small'];
    sizes.forEach((size) => {
      const wrapper = mount(ButtonGroup, {
        props: { size },
        slots: {
          default: [
            { template: '<Button>button 1</Button>' },
            { template: '<Button>button 2</Button>' }
          ]
        }
      });

      const buttonWrappers = wrapper.findAllComponents(Button);
      buttonWrappers.forEach((buttonWrapper) => {
        expect(buttonWrapper.classes()).toContain(`qi-button--${size}-size`);
      });
    });
  });

  test('button group type', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info'];
    types.forEach((type) => {
      const wrapper = mount(ButtonGroup, {
        props: { type },
        slots: {
          default: [
            { template: '<Button>button 1</Button>' },
            { template: '<Button>button 2</Button>' }
          ]
        }
      });

      const buttonWrappers = wrapper.findAllComponents(Button);
      buttonWrappers.forEach((buttonWrapper) => {
        expect(buttonWrapper.classes()).toContain(`qi-button--${type}-type`);
      });
    });
  });

  test('button group disabled', () => {
    const wrapper = mount(ButtonGroup, {
      props: { disabled: true },
      slots: {
        default: [
          { template: '<Button>button 1</Button>' },
          { template: '<Button>button 2</Button>' }
        ]
      }
    });

    const buttonWrappers = wrapper.findAllComponents(Button);
    buttonWrappers.forEach((buttonWrapper) => {
      expect(buttonWrapper.classes()).toContain('is-disabled');
    });
  });
});
