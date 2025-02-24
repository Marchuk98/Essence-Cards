import s from './cards-table-actions.module.scss'
import { Edit, Trash } from '../../../assets/icons'
import {
  useDeleteCardMutation,
  useUpdateCardMutation,
} from '../../../services/cards/cards-endpoints/cards.api.ts'
import { useState } from 'react'
import { DeleteModal } from '../../modals-actions'
import { EditCardModal } from '../../modals-actions/edit-card-modal'

type CardsTableActionsType = {
  isActiveActions?: boolean
  card: {
    id: string
    question: string
    answer: string
    questionImg: string
    answerImg: string
  }
}

export const CardsTableActions = (props: CardsTableActionsType) => {
  const { card, isActiveActions = false } = props

  const [updateCard] = useUpdateCardMutation()
  const [removeCard] = useDeleteCardMutation()

  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)

  const handleUpdateCard = (data: FormData) => {
    updateCard({ id: card.id, data })
  }

  const removeCardHandler = () => {
    removeCard({ id: card.id })
  }

  return (
    <div className={s.container}>
      {isActiveActions && (
        <>
          <EditCardModal
            title={'Edit Card'}
            isOpenEditCard={isEditModalOpen}
            setIsOpenEditCard={setEditModalOpen}
            actionButtonText={'Edit Card'}
            onSubmitHandler={data => handleUpdateCard(data)}
            answer={card.answer}
            question={card.question}
            answerImg={card.answerImg}
            questionImg={card.questionImg}
          />
          <button className={s.actionButton} onClick={() => setEditModalOpen(true)}>
            <Edit />
          </button>
          <DeleteModal
            title={'Delete Card'}
            isOpen={isDeleteModalOpen}
            setIsOpen={setDeleteModalOpen}
            actionButtonText={'Delete Card'}
            onClick={removeCardHandler}
            alertMessage={`Do you really want to delete "${card.question}" question?`}
          />
          <button className={s.actionButton} onClick={() => setDeleteModalOpen(true)}>
            <Trash />
          </button>
        </>
      )}
    </div>
  )
}
