import { Meta, StoryObj } from '@storybook/react'
import { RegisterForm } from './'

const meta = {
  title: 'Auth/Registration',
  component: RegisterForm,
  tags: ['autodocs'],
} satisfies Meta<typeof RegisterForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    linkPath: '/login',
  },
}
