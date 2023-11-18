import type { Meta, StoryObj } from "@storybook/svelte";

import Switch from "../components/Switch.svelte";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
    label: "Simple Label",
    onClick: () => {},
  },
};
