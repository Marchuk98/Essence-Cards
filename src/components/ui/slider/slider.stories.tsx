import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Slider } from './'

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

export const Default = () => {
  const [values, setValues] = useState<[number, number]>([0, 100])

  const args = {
    value: values,
    minValue: values[0],
    maxValue: values[1],
  }

  return <Slider {...args} onValueChange={setValues} value={values} />
}

export const Slider_Control_With_Label = () => {
  const [values, setValues] = useState<[number, number]>([0, 100])

  const args = {
    value: values,
    minValue: values[0],
    maxValue: values[1],
    label: 'Slider control number',
  }

  return <Slider {...args} onValueChange={setValues} value={values} />
}