import { Meta, StoryObj } from '@storybook/react'

import { CustomDropdownMenu } from './dropdown_menu.tsx'

const meta = {
  title: 'Components/DropdownMenu',
  component: CustomDropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomDropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const CustomDropdownMenu_Demo: Story = {
  args: {},
}