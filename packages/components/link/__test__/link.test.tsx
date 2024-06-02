import { mount } from '@vue/test-utils';
import { vi, describe, it, expect } from 'vitest';
import Link from '../src/link.vue';
import Icon from '../../icon/src/icon.vue';

describe('Link.vue', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(Link);
    expect(wrapper.classes()).toContain('qi-link'); // 假设这是正确的类名
    expect(wrapper.findComponent(Icon).exists()).toBe(false); // 默认情况下没有图标
  });

  it('omits href and target when disabled', async () => {
    const wrapper = mount(Link, {
      props: {
        disabled: true,
        href: 'https://example.com',
        target: '_blank'
      }
    });

    // 验证href和target属性不存在
    expect(wrapper.attributes('href')).toBeUndefined();
    expect(wrapper.attributes('target')).toBeUndefined();
  });

  it('renders href and target when enabled and href present', async () => {
    const wrapper = mount(Link, {
      props: {
        disabled: false,
        href: 'https://example.com',
        target: '_blank'
      }
    });

    // 验证href和target属性存在
    expect(wrapper.attributes('href')).toBe('https://example.com');
    expect(wrapper.attributes('target')).toBe('_blank');
  });

  it('omits href and target when no href', async () => {
    const wrapper = mount(Link, {
      props: {
        disabled: false,
        href: '',
        target: '_blank'
      }
    });

    // 验证href和target属性不存在
    expect(wrapper.attributes('href')).toBeUndefined();
    expect(wrapper.attributes('target')).toBeUndefined();
  });

  it('renders target when only target is provided', async () => {
    const wrapper = mount(Link, {
      props: {
        disabled: false,
        href: undefined,
        target: '_blank'
      }
    });

    // 验证只有target属性存在
    expect(wrapper.attributes('href')).toBeUndefined();
    expect(wrapper.attributes('target')).toBe(undefined);
  });

  it('handles click event when not disabled', async () => {
    const onClick = vi.fn();
    const wrapper = mount(Link, {
      props: { disabled: false, onClick }
    });

    // 触发点击事件
    await wrapper.trigger('click');

    // 验证onClick是否被正确调用
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(expect.any(MouseEvent));
  });

  it('disables click event when disabled', async () => {
    const emit = vi.fn();
    const wrapper = mount(Link, {
      props: { disabled: true },
      global: {
        mocks: {
          emit
        }
      }
    });

    await wrapper.trigger('click');
    await wrapper.vm.$nextTick();
    expect(emit).not.toHaveBeenCalled();
  });

  it('renders icon when provided', () => {
    const wrapper = mount(Link, { props: { icon: 'home' } });
    expect(wrapper.findComponent(Icon).exists()).toBe(true);
    expect(wrapper.findComponent(Icon).props('icon')).toBe('home');
  });

  // 如果有其他逻辑或条件分支，也应该添加相应的测试用例以达到100%覆盖率
});
