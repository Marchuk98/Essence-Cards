import { ThemeToogle } from './'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Theme Toogle',
  component: ThemeToogle,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeToogle>

export default meta
type Story = StoryObj<typeof ThemeToogle>

export const Default: Story = {
  render: () => {
    return (
      <>
        <ThemeToogle />
      </>
    )
  },
}

