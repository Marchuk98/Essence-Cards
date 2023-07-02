import { Meta, StoryObj } from '@storybook/react'

import { Eye } from '../../../images/svg/icons/EyeSvg.tsx'
import { Search } from '../../../images/svg/icons/SearchSvg.tsx'

import { TextField } from './text-field.tsx'

const meta = {
  title: 'Components/Input',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      option: ['default', 'password', 'search'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'please type text',
  },
}

export const Password: Story = {
  args: {
    variant: 'password',
    placeholder: 'please type password',
    children: <Eye />,
  },
}

export const Search_With_Icon: Story = {
  args: {
    variant: 'search',
    placeholder: 'please type text',
    children: <Search />,
  },
}

export const Error: Story = {
  args: {
    variant: 'default',
    placeholder: 'please type text',
    error: true,
  },
}





