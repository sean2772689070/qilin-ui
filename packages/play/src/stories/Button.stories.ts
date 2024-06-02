import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { fn, within, userEvent, expect, clearAllMocks } from '@storybook/test';

import { QiButton } from 'qilin-ui';
import { QiButtonGroup } from 'qilin-ui';
import { set } from 'lodash-es';

type Story = StoryObj<typeof QiButton> & { argTypes?: ArgTypes };

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
    template: container(`
      <qi-button :data-testid="'story-test-btn'" v-bind="args">
        {{args.content}}
      </qi-button>
    `)
  }),

  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByTestId('story-test-btn');

    await step('button click event', async () => {
      await userEvent.click(btn);
      await expect(args.onClick).toHaveBeenCalled();
      clearAllMocks();
    });

    await step(
      'When useThrottle is true, the onClick should be called once',
      async () => {
        set(args, 'useThrottle', true);
        await userEvent.tripleClick(btn);

        await expect(args.onClick).toHaveBeenCalledOnce();
        clearAllMocks();
      }
    );

    await step(
      'When useThrottle is false, the onClick should be called three',
      async () => {
        set(args, 'useThrottle', false);
        await userEvent.tripleClick(btn);

        await expect(args.onClick).toHaveBeenCalledTimes(3);
        clearAllMocks();
      }
    );

    await step(
      'When disabled is true, the onClick should not be called',
      async () => {
        set(args, 'disabled', true);
        await userEvent.tripleClick(btn);

        await expect(args.onClick).not.toHaveBeenCalled();
        set(args, 'disabled', false);
        clearAllMocks();
      }
    );

    await step(
      'When loading is true, the onClick should not be called',
      async () => {
        set(args, 'loading', true);
        await userEvent.tripleClick(btn);

        await expect(args.onClick).not.toHaveBeenCalled();
        set(args, 'loading', false);
        clearAllMocks();
      }
    );
  }
};

export const Autofoucs: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: 'text' }
    }
  },
  args: {
    type: 'primary',
    content: 'Button',
    autofocus: true
  },
  render: (args) => ({
    components: { QiButton },
    setup() {
      return { args };
    },
    template: container(`
      <h2>请点击浏览器的刷新页面按钮来获取按钮聚焦，之后点击键盘上的Enter键进行测试</h2>
      <qi-button :data-testid="'story-test-btn'" v-bind="args">
        {{args.content}}
      </qi-button>
    `)
  }),
  play: async ({ args }) => {
    await userEvent.keyboard('{enter}');

    await expect(args.onClick).toHaveBeenCalledOnce();
    clearAllMocks();
  }
};

export const Circle: Story = {
  args: {
    icon: 'search',
    circle: true,
    type: 'primary'
  },
  render: (args) => ({
    components: { QiButton },
    setup() {
      return { args };
    },
    template: container(`
      <qi-button  v-bind="args"/>
    `)
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step('click button', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await expect(args.onClick).toHaveBeenCalled();
  }
};

Circle.parameters = {};

export const Group: Story & { args: { content1: string; content2: string } } = {
  argTypes: {
    groupType: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', '']
    },
    groupSize: {
      control: { type: 'select' },
      options: ['large', 'default', 'small', '']
    },
    groupDisabled: {
      control: 'boolean'
    },
    content1: {
      control: { type: 'text' },
      defaultValue: 'Button1'
    },
    content2: {
      control: { type: 'text' },
      defaultValue: 'Button2'
    }
  },
  args: {
    round: true,
    type: 'primary',
    content1: 'Button1',
    content2: 'Button2'
  },
  render: (args) => ({
    components: { QiButton, QiButtonGroup },
    setup() {
      return { args };
    },
    template: container(`
       <qi-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <qi-button v-bind="args">{{args.content1}}</qi-button>
         <qi-button v-bind="args">{{args.content2}}</qi-button>
       </qi-button-group>
    `)
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step('click btn1', async () => {
      await userEvent.click(canvas.getByText('Button1'));
    });
    await step('click btn2', async () => {
      await userEvent.click(canvas.getByText('Button2'));
    });
    await expect(args.onClick).toHaveBeenCalled();
  }
};

export default meta;
