import { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './'

const meta = {
  title: 'Auth/Login Form',
  component: LoginForm,
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
