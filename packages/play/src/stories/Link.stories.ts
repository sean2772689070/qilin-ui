import { QiIcon, QiLink } from 'qilin-ui';
import type { Meta, StoryObj } from '@storybook/vue3';
import 'qilin-ui/dist/esm/theme/index.css';
import 'qilin-ui/dist/esm/theme/link.css';

type Story = StoryObj<typeof QiLink>;

const meta: Meta<typeof QiLink> = {
  title: 'Example/Link',
  component: QiLink,
  subcomponents: { QiIcon },
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

export const Default: Story = {
  render: (args) => ({
    components: { QiLink },
    setup() {
      return { args };
    },
    template: `
      <QiLink v-bind="args">
        <template #icon>
          <QiIcon name="arrow-right" />
        </template>
        Link
      </QiLink>
    `
  })
};

export default meta;
