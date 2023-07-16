import { Meta, StoryObj } from '@storybook/react'
import { RadioGroup } from './'
import { useState } from 'react'

const meta = {
  title: 'Components/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState('1')

    return <RadioGroup {...args} value={value} onChange={setValue} />
  },

  args: {
    options: [
      { value: 'value1', label: 'label1' },
      { value: 'value2', label: 'label2' },
      { value: 'value3', label: 'label3' },
    ],
  },
}

export const DisabledRadioButton: Story = {
  render: args => {
    const [value, setValue] = useState('1')

    return <RadioGroup {...args} value={value} onChange={setValue} />
  },
  args: {
    options: [
      { value: 'value1', label: 'label1' },
      { value: 'value2', label: 'label2' },
      { value: 'value3', label: 'label3', disabled: true },
    ],
  },
}
