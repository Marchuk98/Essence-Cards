import { Meta, StoryObj } from '@storybook/react'

import { CustomCheckbox } from './custom_checkbox.tsx'

const meta = {
  title: 'Components/CustomCheckbox',
  component: CustomCheckbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      option: true || false,
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof CustomCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checkbox: Story = {
  args: {},
}

export const CheckBox_Checked: Story = {
  args: {
    checked: true,
  },
}

export const CheckBox_With_Description: Story = {
  args: {
    description: 'Check-box',
  },
}
