import { useNavigate } from 'react-router-dom'
import { Edit, Play, Trash } from '../../../assets/icons'
import { PATH } from '../../../common'
import { useState } from 'react'
import { EditPackModal, DeleteModal } from '../../modals-actions'
import {
  useDeletePackMutation,
  useUpdatePackMutation,
} from '../../../services/packs/packs-endpoints/packs.api.ts'
import { packItem } from '../../../services/packs/packs-endpoints/packs.types.ts'

import s from './packs-table-actions.module.scss'

type TableActionButtonProps = {
  isActiveActions?: boolean
  pack: packItem
}

export const PacksTableActions = (props: TableActionButtonProps) => {
  const { pack, isActiveActions = false } = props
  const navigate = useNavigate()
  const [updatePack] = useUpdatePackMutation()
  const [removePack] = useDeletePackMutation()

  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)

  const handleUpdatePack = (data: FormData) => {
    updatePack({ id: pack.id, formData: data })
  }

  const removePackHandler = () => {
    removePack({ id: pack.id })
  }

  return (
    <div className={s.container}>
      <button className={s.styleBtn} onClick={() => navigate(`${PATH.LEARN}/${pack.id}`)}>
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