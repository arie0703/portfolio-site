import { StoryObj, Meta } from "@storybook/react";
import { Work } from ".";

const meta: Meta<typeof Work> = {
  title: "Work",
  component: Work,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Work>;

export const Default: Story = {
  argTypes: {},
};
