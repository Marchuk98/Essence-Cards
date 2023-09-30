import { LinearProgress } from './'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Loaders/Linear Progress',
  component: LinearProgress,
  tags: ['autodocs'],
} satisfies Meta<typeof LinearProgress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}