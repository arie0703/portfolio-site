import { StoryObj, Meta } from '@storybook/react';
import { Title } from '.';

const meta: Meta<typeof Title> = {
  title: "Title",
  component: Title,
  args: {},
};

export default meta

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  argTypes: {},
  args: { title: "Title" }
}



