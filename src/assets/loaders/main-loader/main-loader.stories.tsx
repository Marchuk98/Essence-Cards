import { MainLoader } from './'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Loaders/Main loader',
  component: MainLoader,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MainLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
