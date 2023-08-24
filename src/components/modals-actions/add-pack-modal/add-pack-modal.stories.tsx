import { Meta, StoryObj } from '@storybook/react'
import { AddPackModal } from './'
import { useState } from 'react'
import { Button } from '../../ui'

const meta = {
  title: 'Actions/Modals/Add Pack Modal',
  component: AddPackModal,
  tags: ['autodocs'],
  args: {
    trigger: <Button variant={'primary'}>Add New Pack</Button>,
    setIsOpenAddPack: isOpen => console.log(isOpen),
    isOpenAddPack: false,
    onSubmitHandler: data => console.log(data),
  },
} satisfies Meta<typeof AddPackModal>

export default meta
type Story = StoryObj<typeof AddPackModal>

export const Default: Story = {
  render: args => {
    const [isOpenAddPack, setIsOpenAddPack] = useState<boolean>(false)

    return (
      <div>
        <AddPackModal
          title={'Add New Pack'}
          trigger={args.trigger}
          setIsOpenAddPack={setIsOpenAddPack}
          onSubmitHandler={data => console.log(data)}
          isOpenAddPack={isOpenAddPack}
        />
      </div>
    )
  },
}
