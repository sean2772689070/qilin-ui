import { beforeEach, describe, it, expect } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import Text from '../src/text.vue';
import { textProps } from '../src/text.ts';
import type { TextSize, TextType } from '../src/text.ts';

describe('Text.vue', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(Text, {
      propsData: {
        ...textProps
        // 在这里添加你需要测试的具体props值
      }
    });
  });

  it('renders the correct component', () => {
    expect(wrapper.findComponent({ name: 'QiText' })).toBeTruthy();
  });

  it('applies the correct classes based on props', () => {
    // 针对type和size的props
    const types: TextType[] = [
      'primary',
      'success',
      'warning',
      'danger',
      'info',
      'default'
    ];
    const sizes: TextSize[] = ['small', 'default', 'large'];

    types.forEach((type) => {
      const wrapper = mount(Text, {
        props: { type }
      });
      expect(wrapper.classes()).toContain(`qi-text--${type}-type`);
    });

    sizes.forEach((size) => {
      const wrapper = mount(Text, {
        props: { size }
      });
      expect(wrapper.classes()).toContain(`qi-text--${size}-size`);
    });

    const wrapper = mount(Text, {
      props: { truncated: true }
    });
    expect(wrapper.classes()).toContain('is-truncated');
  });

  it('applies custom class when truncated prop is true', () => {
    const wrapper = mount(Text, {
      props: { truncated: true }
    });
    expect(wrapper.classes()).toContain('is-truncated');
  });

  it('sets the -webkit-line-clamp style correctly', () => {
    const wrapper = mount(Text, {
      props: { lineClamp: 3 }
    });
    expect(wrapper.element.style['-webkit-line-clamp']).toBe('3');
  });

  it('renders the slot content', () => {
    const wrapper = mount(Text, {
      slots: {
        default: 'Test Content'
      }
    });
    expect(wrapper.text()).toBe('Test Content');
  });

  it('renders with a custom tag', () => {
    wrapper.setProps({ tag: 'p' });
    expect(wrapper.findComponent({ name: 'p' })).toBeTruthy();
  });
});
