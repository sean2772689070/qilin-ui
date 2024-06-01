import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import Button from '../src/button.vue';
import type { NativeType, Size, Type } from '../src/button';

describe('Button.vue', () => {
  // Props: type
  it('should has the correct type class when type prop is set', () => {
    const types: Type[] = [
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
  });

  // Props: size
  it('should has the correct size class when size prop is set', () => {
    const sizes = ['large', 'default', 'small'];
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size: size as Size }
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

  // Events: click
  it('should emits a click event when the button is clicked', async () => {
    const wrapper = mount(Button, {});
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toHaveLength(1);
  });
});
