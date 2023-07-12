import { Meta, StoryObj } from '@storybook/react'
import { PersonalInformation } from './'

const meta = {
  title: 'Auth/Personal information',
  component: PersonalInformation,
  tags: ['autodocs'],
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'Alexey',
    avatar: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    email: 'Gaba00275@yandex.ru',
  },
}
