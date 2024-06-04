import type { Meta, StoryObj } from '@storybook/vue3';
import { QiCollapse, QiCollapseItem } from 'qilin-ui';

import 'qilin-ui/dist/theme/collapse.css';

type Story = StoryObj<typeof QiCollapse>;

const meta: Meta<typeof QiCollapse> = {
  title: 'Example/Collapse',
  component: QiCollapse,
  subcomponents: { QiCollapseItem },
  tags: ['autodocs']
};

export const Default: Story = {
  render: (args) => ({
    components: {
      QiCollapse,
      QiCollapseItem
    },
    setup() {
      return {
        args
      };
    },
    template: `
    <qi-collapse v-bind="args">
      <qi-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </qi-collapse-item>
      <qi-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </qi-collapse-item>
      <qi-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </qi-collapse-item>
    </qi-collapse>
    `
  }),
  args: {
    accordion: true,
    modelValue: ['a']
  }
};

export default meta;
