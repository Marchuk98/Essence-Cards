import { Meta, StoryObj } from '@storybook/react'

import { Select } from './'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    label: {
      options: ['Select', null],
      control: { type: 'radio' },
    },
    errorMessage: {
      options: ['error message', null],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: ['select 1', 'select 2', 'select 3', 'select 4', 'select 5', 'select 6'],
    fullWidth: false,
  },
}

export const Pagination_Select: Story = {
  args: {
    items: ['5', '10', '15', '20', '25', '30'],
    width: '100',
  },
}

export const Select_Disabled: Story = {
  args: {
    items: ['5', '10', '15', '20', '25', '30'],
    label: 'Label',
    disabled: true,
  },
}