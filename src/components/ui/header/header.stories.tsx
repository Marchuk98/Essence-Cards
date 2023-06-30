import { Meta, StoryObj } from '@storybook/react'

import { Header } from './'
import { LogoCardProject } from '../../../images/svg/icons'
import { Button } from '../button'
import { UserAvatar } from '../avatar'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Header_Demo: Story = {
  args: {
    children: (
      <>
        <LogoCardProject />
        <Button variant={'primary'}>Sign In</Button>
      </>
    ),
  },
}

export const Header_Demo_User: Story = {
  args: {
    children: (
      <>
        <LogoCardProject />
        <UserAvatar name={'Alexey'} />
      </>
    ),
  },
}
