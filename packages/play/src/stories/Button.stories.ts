import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { fn } from '@storybook/test';

import { QiButton } from 'qilin-ui';

type Story = StoryObj<typeof QiButton> & { argTypes: ArgTypes };

const meta: Meta<typeof QiButton> = {
  title: 'Example/Button',
  component: QiButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'primary',
        'success',
        'warning',
        'danger',
        'info',
        'default',
        ''
      ]
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'default', 'small', '']
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    useThrottle: {
      control: 'boolean'
    },
    throttleDuration: {
      control: 'number'
    },
    autofocus: {
      control: 'boolean'
    },
    tag: {
      control: { type: 'select' },
      options: ['button', 'a', 'div']
    },
    nativeType: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset', '']
    },
    icon: {
      control: { type: 'text' }
    },
    iconPlacement: {
      control: { type: 'select' },
      options: ['left', 'right']
    },
    loadingIcon: {
      control: { type: 'text' }
    }
  },
  args: { onClick: fn() }
};

const container = (val: string) => `
  <div style="margin: 5px">
    ${val}
</div>
`;

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: 'text' }
    }
  },
  args: {
    type: 'primary',
    content: 'Button'
  },
  render: (args) => ({
    components: { QiButton },
    setup() {
      return { args };
    },
    template: `
      <qi-button v-bind="args">
        {{args.content}}
      </qi-button>
    `
  })
};

export default meta;
