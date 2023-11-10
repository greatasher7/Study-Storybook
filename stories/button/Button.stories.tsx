import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Autodocs/Button",
  component: Button,
  parameters: {
    layout: "centered",
    componentSubtitle: "잘 만든 버튼.",
    docs: {
      description: { component: "잘 만든 버튼입니다. 아주 잘 만들었지요 ㅎㅎ" },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "black", padding: "10px", borderRadius: "10px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
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
