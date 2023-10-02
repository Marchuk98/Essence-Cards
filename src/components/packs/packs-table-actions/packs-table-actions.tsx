import { useNavigate } from 'react-router-dom'
import { Edit, Play, Trash } from '../../../assets/icons'
import { PATH } from '../../../common'
import { useState } from 'react'
import { EditPackModal, DeleteModal } from '../../modals-actions'
import {
  useDeletePackMutation,
  useUpdatePackMutation,
} from '../../../services/packs/packs-endpoints/packs.api.ts'
import { packItem, PackType } from '../../../services/packs/packs-endpoints/packs.types.ts'
import { toast } from 'react-toastify'

import s from './packs-table-actions.module.scss'

type TableActionButtonProps = {
  isActiveActions?: boolean
  pack: packItem
  packContent: PackType[]
}

export const PacksTableActions = (props: TableActionButtonProps) => {
  const { pack, isActiveActions = false, packContent } = props
  const navigate = useNavigate()
  const [updatePack] = useUpdatePackMutation()
  const [removePack] = useDeletePackMutation()

  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)

  const handlePlay = (packId: string) => {
    const selectedPack = packContent?.find(pack => pack.id === packId)

    if (selectedPack && selectedPack.cardsCount > 0) {
      navigate(`${PATH.LEARN}/${packId}`)
    } else {
      toast.warning('Sorry, the deck is still empty. Please choose a deck with available cards.')
    }
  }

  const handleUpdatePack = (data: FormData) => {
    updatePack({ id: pack.id, formData: data })
  }

  const removePackHandler = () => {
    removePack({ id: pack.id })
  }

  return (
    <div className={s.container}>
      <button className={s.styleBtn} onClick={() => handlePlay(pack.id)}>
        <Play />
      </button>
      {isActiveActions && (
        <>
          <EditPackModal
            title={'Edit Pack'}
            trigger={<></>}
            onSubmitHandler={data => handleUpdatePack(data)}
            setIsOpenEditPack={setEditModalOpen}
            isOpenEditPack={isEditModalOpen}
            cover={pack.cover || ''}
            packName={pack.name}
            isPrivate={pack.isPrivate}
          />
          <button className={s.styleBtn} onClick={() => setEditModalOpen(true)}>
            <Edit />
          </button>
          <DeleteModal
            isOpen={isDeleteModalOpen}
            setIsOpen={setDeleteModalOpen}
            onClick={removePackHandler}
            title={'Delete Pack'}
            actionButtonText={'Delete Pack'}
            alertMessage={`Do you really want to delete "${pack.name}" pack?`}
          />
          <button className={s.styleBtn} onClick={() => setDeleteModalOpen(true)}>
            <Trash />
          </button>
        </>
      )}
    </div>
  )
}