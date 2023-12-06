import type { Meta, StoryObj } from "@storybook/svelte";

import Button from "../components/Button.svelte";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Simple Label",
    onClick: () => {},
  },
};
