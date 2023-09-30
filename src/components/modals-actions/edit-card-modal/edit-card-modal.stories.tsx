import { EditCardModal } from './'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Edit } from '../../../assets/icons'

import s from '../../cards/cards-table-actions/cards-table-actions.module.scss'

const meta = {
  title: 'Actions/Modals/Edit Card Modal',
  component: EditCardModal,
  tags: ['autodocs'],
} satisfies Meta<typeof EditCardModal>

export default meta
type Story = StoryObj<typeof EditCardModal>

export const Default: Story = {
  render: () => {
    const [isOpenEditCard, setIsOpenEditCard] = useState<boolean>(false)

    return (
      <div>
        <EditCardModal
          title={'Edit Card'}
          question={'How "This" works in JavaScript?'}
          answer={'JavaScript is a single-threaded language'}
          onSubmitHandler={data => console.log(data)}
          actionButtonText={'Edit Card'}
          isOpenEditCard={isOpenEditCard}
          setIsOpenEditCard={setIsOpenEditCard}
        />
        <button className={s.actionButton} onClick={() => setIsOpenEditCard(true)}>
          <Edit />
        </button>
      </div>
    )
  },
}