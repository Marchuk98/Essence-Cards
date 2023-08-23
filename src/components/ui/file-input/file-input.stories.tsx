import { Meta, StoryObj } from '@storybook/react'
import { FileInput } from './file-input.tsx'
import { Button } from '../button'

const meta = {
  title: 'Components/FileInput',
  component: FileInput,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof FileInput>

export default meta
type Story = StoryObj<typeof FileInput>

export const Default: Story = {
  args: {
    name: 'cover',
    withPreview: true,
    children: onClick => (
      <Button type={'button'} variant={'secondary'} onClick={onClick}>
        Change cover
      </Button>
    ),
  },
}
