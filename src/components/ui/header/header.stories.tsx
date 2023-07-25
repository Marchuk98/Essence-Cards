import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Header } from './'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    isAuth: {
      options: [true, false],
      control: { type: 'radio' },
    },
    name: [],
    avatar: [''],
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isAuth: false,
    name: 'Alexey',
    avatar: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    email: 'Gaba00275@yandex.ru',
  },
}

export const Control_Auth_Person: Story = {
  args: {
    isAuth: true,
    name: 'Alexey',
    email: 'alexey777@yandex.ru',
    avatar: 'https://...',
  },

  render: args => {
    const [isAuth, setIsAuth] = useState<boolean>(false)

    const handleSignOut = () => {
      setIsAuth(!isAuth)
    }

    return (
      <Header
        {...args}
        onSignIn={handleSignOut}
        onSignOut={handleSignOut}
        onProfileSelect={() => alert('Redirect to personal-information')}
        isAuth={isAuth}
      />
    )
  },
}
