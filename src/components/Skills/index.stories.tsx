import { StoryObj, Meta } from '@storybook/react';
import { Skills } from '.';

const meta: Meta<typeof Skills> = {
  title: "Skills",
  component: Skills,
  args: {},
};

export default meta

type Story = StoryObj<typeof Skills>;

export const Default: Story = {
  argTypes: {}
}



