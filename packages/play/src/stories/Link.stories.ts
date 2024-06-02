import { QiLink } from 'qilin-ui';
import type { StoryObj, ArgTypes, Meta } from '@storybook/vue3';

type Story = StoryObj<typeof QiLink> & { argTypes?: ArgTypes };

const meta: Meta<typeof QiLink> = {
  title: 'Example/Link',
  component: QiLink,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'text' }
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', '']
    },
    underline: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    href: {
      control: { type: 'text' }
    },
    target: {
      control: { type: 'select' },
      options: ['_blank', '_parent', '_self', '_top']
    }
  }
};

export default meta;
