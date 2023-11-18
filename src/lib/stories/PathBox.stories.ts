import type { Meta, StoryObj } from "@storybook/svelte";

import PathBox from "../components/PathBox.svelte";

const meta = {
  title: "Components/PathBox",
  component: PathBox,
  tags: ["autodocs"],
} satisfies Meta<PathBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPath: "vita",
  },
};
