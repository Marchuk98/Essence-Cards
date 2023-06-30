import { Meta, StoryObj } from '@storybook/react'

import { UserAvatar } from './avatar.tsx'

const meta = {
  title: 'Components/Avatar',
  component: UserAvatar,
  tags: ['autodocs'],
} satisfies Meta<typeof UserAvatar>

export default meta
export type Story = StoryObj<typeof meta>

export const UserAvatar_Demo: Story = {
  args: {},
}
