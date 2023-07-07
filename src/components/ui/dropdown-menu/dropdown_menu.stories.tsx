import { Meta, StoryObj } from '@storybook/react'

import { Button } from '..'

import { CustomDropdownMenu, DropdownItemWithIcon } from '.'

const meta = {
  title: 'Components/Dropdown',
  component: CustomDropdownMenu,
} satisfies Meta<typeof CustomDropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownItemWithIcon icon={''} text="Добавить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={''} text="Изменить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={''} text="Удалить" onSelect={() => {}} />
      </>
    ),
    trigger: <Button>open</Button>,
  },
}
