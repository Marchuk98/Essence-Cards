import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Slider } from './slider.tsx'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSlider: Story = {
  render: args => {
    const [value, setValue] = useState([30, 60])

    const changeHandler = (value: number[]) => setValue(value)

    return (
      <Slider
        value={value}
        defaultValue={[10, 20]}
        isRange
        onValueChange={changeHandler}
        {...args}
      />
    )
  },
}
