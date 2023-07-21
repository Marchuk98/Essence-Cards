import { Meta, StoryObj } from '@storybook/react'

import { CustomDropdownMenu, DropdownItemWithIcon } from './'
import { Edit, Play, Trash } from '../../../images/svg/icons'
import { Button } from '../button'

const meta = {
  title: 'Components/Dropdown',
  component: CustomDropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomDropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownItemWithIcon icon={<Play />} text="Learn" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<Edit />} text="Edit" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<Trash />} text="Delete" onSelect={() => {}} />
      </>
    ),
  },
}

export const Dropdown_Trigger_Icon: Story = {
  render: args => {
    return (
      <div>
        <CustomDropdownMenu
          trigger={
            <button>
              <Button>Trigger</Button>
            </button>
          }
          {...args}
        >
          <>
            <DropdownItemWithIcon icon={<Play />} text="Learn" onSelect={() => {}} />
            <DropdownItemWithIcon icon={<Edit />} text="Edit" onSelect={() => {}} />
            <DropdownItemWithIcon icon={<Trash />} text="Delete" onSelect={() => {}} />
          </>
        </CustomDropdownMenu>
      </div>
    )
  },
  args: {
    children: <></>,
    align: 'center',
  },
}

export const DropdownDisabled: Story = {
  render: args => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CustomDropdownMenu {...args}>
          <>
            <DropdownItemWithIcon
              disabled={true}
              icon={<Play />}
              text="Learn"
              onSelect={() => {}}
            />
            <DropdownItemWithIcon disabled={true} icon={<Edit />} text="Edit" onSelect={() => {}} />
            <DropdownItemWithIcon
              disabled={true}
              icon={<Trash />}
              text="Delete"
              onSelect={() => {}}
            />
          </>
        </CustomDropdownMenu>
      </div>
    )
  },
  args: {
    children: <></>,
    align: 'center',
  },
}
