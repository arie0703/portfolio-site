import { StoryObj, Meta } from '@storybook/react';
import { Activity } from '.';


const meta: Meta<typeof Activity> = {
  title: "Activity",
  component: Activity,
  args: {},
};

export default meta

type Story = StoryObj<typeof Activity>;

export const Default: Story = {
  argTypes: {}
}
