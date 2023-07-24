import { Meta, StoryObj } from '@storybook/react'

import { TextField } from './text-field.tsx'

const meta = {
  title: 'Components/Input',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      option: ['text', 'password', 'search'],
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'please type text',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'please type password',
  },
}

export const Search_With_Icon: Story = {
  args: {
    type: 'search',
    placeholder: 'please type text search',
  },
}

export const Error: Story = {
  args: {
    type: 'text',
    errorMessage: 'error',
    value: 'error',
  },
}
