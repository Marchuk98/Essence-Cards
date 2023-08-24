import { DeleteModal } from './'
import { Meta, StoryObj } from '@storybook/react'
import { Trash } from '../../../images/svg/icons'
import { useState } from 'react'

const meta = {
  title: 'Actions/Modals/Delete Pack Modal',
  component: DeleteModal,
  tags: ['autodocs'],
} satisfies Meta<typeof DeleteModal>

export default meta
type Story = StoryObj<typeof DeleteModal>

export const Default: Story = {
  render: () => {
    const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false)

    const isOpenModalHandler = () => {
      setIsOpenDelete(!isOpenDelete)
    }

    return (
      <div>
        <DeleteModal
          title={'Delete Modal'}
          isOpen={isOpenDelete}
          setIsOpen={isOpenModalHandler}
          actionButtonText={'Delete Pack'}
          onClick={() => {}}
          alertMessage={'do you really want to delete?'}
        >
          <Trash onClick={isOpenModalHandler} />
        </DeleteModal>
      </div>
    )
  },
}
