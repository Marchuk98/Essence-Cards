import { Meta, StoryObj } from '@storybook/react'
import { PersonalInformation } from './'
import { Provider } from 'react-redux'
import { store } from '../../../app/store.ts'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Auth/Personal information',
  component: PersonalInformation,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <Provider store={store}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </Provider>
    ),
  ],
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    userId: '1',
    name: 'Alexey',
    avatar: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    email: 'Gaba00275@yandex.ru',
  },
}
