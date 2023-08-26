import { ForgotPasswordForm } from './'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Auth/Forgot Password',
  component: ForgotPasswordForm,
  tags: ['autodocs'],
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmitHandler: data => console.log(data),
  },
}
