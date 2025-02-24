import { PageNotFound } from './page-not-found'
import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Pages/Page not found',
  component: PageNotFound,
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </div>
    ),
  ],
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof PageNotFound>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
