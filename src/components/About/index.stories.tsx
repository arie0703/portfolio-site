import { StoryObj, Meta } from '@storybook/react';
import { About } from '.';

const meta: Meta<typeof About> = {
  title: "About",
  component: About,
  args: {},
};

export default meta

type Story = StoryObj<typeof About>;

export const Default: Story = {
  argTypes: {}
}



