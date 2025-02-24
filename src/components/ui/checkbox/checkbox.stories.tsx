import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'
import { useState } from 'react'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<boolean>(true)
    const onChange = () => {
      setValue(!value)
    }

    return <Checkbox checked={value} onChange={onChange} />
  },
  args: {},
}

export const Checkbox_With_Label: Story = {
  render: args => {
    const [value, setValue] = useState<boolean>(true)

    const onChange = () => {
      setValue(!value)
    }

    return <Checkbox {...args} checked={value} onChange={onChange} />
  },
  args: {
    label: 'Click here',
  },
}
