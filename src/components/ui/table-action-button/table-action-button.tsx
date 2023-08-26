import { useNavigate } from 'react-router-dom'
import { Edit, Play, Trash } from '../../../images/svg/icons'
import { PATH } from '../../../common'
import { useState } from 'react'
import { EditPackModal, DeleteModal } from '../../modals-actions'
import {
  useDeletePackMutation,
  useUpdatePackMutation,
} from '../../../services/packs/packs-endpoints/packs.api.ts'

import s from './table-action-button.module.scss'

export type packItem = {
  id: string
  name: string
  isPrivate: boolean
  cover: string | undefined
}

type TableActionButtonProps = {
  isActiveActions?: boolean
  pack: packItem
}

export const TableActionButton = (props: TableActionButtonProps) => {
  const { pack, isActiveActions = false } = props
  const navigate = useNavigate()
  const [updatePack] = useUpdatePackMutation()
  const [removePack] = useDeletePackMutation()

  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)

  const removePackHandler = () => {
    removePack({ id: pack.id })
  }

  return (
    <div className={s.container}>
      <button className={s.styleBtn} onClick={() => navigate(PATH.LEARN)}>
        <Play />
      </button>
      {isActiveActions && (
        <>
          <EditPackModal
            title={'Edit Pack'}
            trigger={<></>}
            onSubmitHandler={({ name, isPrivate, cover }) => {
              const form = new FormData()

              form.append('name', name)
              form.append('isPrivate', String(isPrivate))
              form.append('cover', cover)
              updatePack({ id: pack.id, formData: form })
            }}
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