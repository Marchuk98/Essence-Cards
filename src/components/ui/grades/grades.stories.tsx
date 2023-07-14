import { Meta, StoryObj } from '@storybook/react'
import { Grades, GradeType } from './'
import { useState } from 'react'

const meta = {
  title: 'Components/Grade',
  component: Grades,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} as Meta<typeof Grades>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { grade: 3 },
}

const ControlledGrade = () => {
  const [rating, setRating] = useState<GradeType>(0)

  return <Grades grade={rating} onChange={setRating} />
}

export const GradeWithControl: Story = {
  args: { grade: 0 },
  render: () => <ControlledGrade />,
}