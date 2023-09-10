import { CustomDropdownMenu, DropdownItemWithIcon } from '../../ui'
import { Edit, Play, Trash } from '../../../assets/icons'
import { DeleteModal, EditPackModal } from '../../modals-actions'
import { Fragment } from 'react'

type DropdownPackMenuType = {
  packName: string
  packImage: string
  packIsPrivate: boolean
  packId: string
  onEdit: (data: FormData) => void
  onDelete: () => void
  onClickLearnPack: () => void
  isDeleteModalOpen: boolean
  setDeleteModalOpen: (value: boolean) => void
  isEditPackModalOpen: boolean
  setEditPackModalOpen: (value: boolean) => void
}

export const DropdownPackMenu = (props: DropdownPackMenuType) => {
  const {
    packName,
    packImage,
    packIsPrivate,
    isEditPackModalOpen,
    isDeleteModalOpen,
    setDeleteModalOpen,
    setEditPackModalOpen,
    onEdit,
    onDelete,
    onClickLearnPack,
  } = props

  return (
    <div>
      <EditPackModal
        title={'Edit Pack'}
        trigger={<></>}
        setIsOpenEditPack={setEditPackModalOpen}
        onSubmitHandler={data => onEdit(data)}
        isOpenEditPack={isEditPackModalOpen}
        cover={packImage}
        isPrivate={packIsPrivate}
        packName={packName}
      />

      <DeleteModal
        title={'Delete Pack'}
        isOpen={isDeleteModalOpen}
        setIsOpen={setDeleteModalOpen}
        actionButtonText={'Delete Pack'}
        onClick={onDelete}
        alertMessage={`Do you really want to delete "${packName}" pack?`}
      />
      <CustomDropdownMenu>
        <Fragment key=".0">
          <DropdownItemWithIcon
            icon={<Play />}
            onSelect={() => onClickLearnPack()}
            text={'Learn'}
          />
          <DropdownItemWithIcon
            icon={<Edit />}
            onSelect={() => setEditPackModalOpen(true)}
            text={'Edit'}
          />
          <DropdownItemWithIcon
            icon={<Trash />}
            onSelect={() => setDeleteModalOpen(true)}
            text={'Delete'}
          />
        </Fragment>
      </CustomDropdownMenu>
    </div>
  )
}