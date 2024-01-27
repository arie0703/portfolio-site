import { StoryObj, Meta } from '@storybook/react';
import { Footer } from '.';

const meta: Meta<typeof Footer> = {
  title: "Footer",
  component: Footer,
  args: {},
};

export default meta

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  argTypes: {}
}



