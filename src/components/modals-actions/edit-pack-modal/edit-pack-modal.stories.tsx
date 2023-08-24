import { EditPackModal } from './'
import { Meta, StoryObj } from '@storybook/react'
import { Edit } from '../../../images/svg/icons'
import { useState } from 'react'

const meta = {
  title: 'Actions/Modals/Edit Pack Modal',
  component: EditPackModal,
  tags: ['autodocs'],
} satisfies Meta<typeof EditPackModal>

export default meta
type Story = StoryObj<typeof EditPackModal>

export const Default: Story = {
  render: () => {
    const [isOpenEditPack, setIsOpenEditPack] = useState<boolean>(false)

    const isOpenModalHandler = () => {
      setIsOpenEditPack(!isOpenEditPack)
    }

    return (
      <div>
        <EditPackModal
          trigger={
            <>
              <Edit onClick={isOpenModalHandler} />
            </>
          }
          setIsOpenEditPack={isOpenModalHandler}
          onSubmitHandler={data => console.log(data)}
          isOpenEditPack={isOpenEditPack}
          cover={''}
          isPrivate={false}
          packName={'packName'}
        />
      </div>
    )
  },
}