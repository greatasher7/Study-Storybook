import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button2";

const meta = {
  title: "MDX/Button2",
  component: Button,
  parameters: {
    componentSubtitle: "버튼입니다. 아주 잘 만들었지요.",
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "20px", borderRadius: "10px", border: "1px solid #999" }}>
        <Story />
      </div>
    ),
  ],
  // tags: ["autodocs"],
  argTypes: {
    primary: {
      description: "버튼의 Primary 여부를 설정합니다.",
      table: {
        category: "Style",
      },
    },
    label: {
      description: "버튼의 내용을 설정합니다.",
      table: {
        category: "Style",
      },
    },
    size: {
      description: "버튼의 크기를 설정합니다.",
      table: {
        category: "Style",
      },
      options: ["small", "large"],
      control: { type: "radio" },
    },
    backgroundColor: {
      description: "버튼의 색상을 설정합니다.",
      table: {
        category: "Style",
      },
      control: { type: "color" },
    },
    onClick: {
      description: "버튼 클릭 시, 발생할 일을 설정합니다",
      table: {
        category: "Event",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

/** Stories */
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
