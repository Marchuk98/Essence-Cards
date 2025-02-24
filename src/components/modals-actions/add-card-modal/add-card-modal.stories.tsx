import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../../ui'

import { AddCardModal } from './'

const meta = {
  title: 'Actions/Modals/Add Card Modal',
  component: AddCardModal,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof AddCardModal>

export default meta
type Story = StoryObj<typeof AddCardModal>

export const Default: Story = {
  render: () => {
    const [isOpenAddCard, setIsOpenAddCard] = useState<boolean>(false)

    return (
      <div>
        <AddCardModal
          title={'Add New Card'}
          isOpenAddCard={isOpenAddCard}
          setIsOpenAddCard={setIsOpenAddCard}
          actionButtonText={'Add New Card'}
          onSubmitHandler={data => console.log(data)}
        />
        <Button variant={'primary'} onClick={() => setIsOpenAddCard(!isOpenAddCard)}>
          Add new Card
        </Button>
      </div>
    )
  },
}
