import { Meta, StoryObj } from '@storybook/react'
import { CheckEmailForm } from './'

const meta = {
  title: 'Auth/Check Email',
  component: CheckEmailForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckEmailForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    linkPath: '/checkEmail',
    email: 'Beglov00234@mail.ru',
  },
}