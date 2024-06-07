import { QiText } from 'qilin-ui';
import type { Meta, StoryObj } from '@storybook/vue3';

import 'qilin-ui/dist/theme/text.css';

type Story = StoryObj<typeof QiText>;

const meta: Meta<typeof QiText> = {
  title: 'Example/Text',
  component: QiText,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['large', 'default', 'small', '']
    },
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
    truncated: {
      control: { type: 'boolean' }
    },
    lineClamp: {
      control: { type: 'text' }
    },
    tag: {
      control: { type: 'text' }
    }
  }
};

export const Default: Story = {
  render: (args) => ({
    components: { QiText },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 300px">
        <QiText v-bind="args" >
          这是一段单行测试文本，调整truncated属性，查看效果。
        </QiText>
      </div>

    `
  })
};

export const LineClamp: Story = {
  render: (args) => ({
    components: { QiText },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 100px;">
        <QiText v-bind="args" >
          这是一段多行测试文本，调整lineClamp属性，查看效果。
        </QiText>
      </div>

    `
  })
};

export default meta;
