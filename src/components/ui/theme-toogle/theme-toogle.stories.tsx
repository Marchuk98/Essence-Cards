import { ThemeToggle } from './'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Theme Toogle',
  component: ThemeToggle,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeToggle>

export default meta
type Story = StoryObj<typeof ThemeToggle>

export const Default: Story = {
  render: () => {
    return (
      <>
        <ThemeToggle />
      </>
    )
  },
}

