import { Meta, StoryObj } from '@storybook/react'
import { CreateNewPasswordForm } from './'

const meta = {
  title: 'Auth/Create new password',
  component: CreateNewPasswordForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmitHandler: data => console.log(data),
  },
}
