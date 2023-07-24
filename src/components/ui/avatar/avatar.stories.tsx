import { Meta, StoryObj } from '@storybook/react'

import { UserAvatar } from './'

const meta = {
  title: 'Components/Avatar',
  component: UserAvatar,
  tags: ['autodocs'],
} satisfies Meta<typeof UserAvatar>

export default meta
export type Story = StoryObj<typeof meta>

export const UserAvatar_Demo: Story = {
  args: {
    name: 'story Name',
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    width: 46,
    height: 46,
  },
}
