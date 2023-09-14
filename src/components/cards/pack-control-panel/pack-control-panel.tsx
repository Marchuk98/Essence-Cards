import { Button, TextField, Typography } from '../../ui'
import { useState } from 'react'
import { AddCardModal } from '../../modals-actions/add-card-modal'
import { DropdownPackMenu } from '../dropdown-pack-menu'
import packImg from '../../../assets/images/react.png'
import { ArrowLeftIcon } from '../../../assets/icons'
import { BlurHashCanvas } from '../../ui/image'
import { useNavigate } from 'react-router-dom'

import s from './pack-control-panel.module.scss'

type PackControlPanelType = {
  packId: string
  packName: string
  packImage: string
  packIsPrivate: boolean
  isMyPack: boolean
  question: string | undefined
  setQuestion: (text: string) => void
  handleCreateCard: (data: FormData) => void
  handleUpdatePack: (data: FormData) => void
  handleRemovePack: () => void
  onClickLearnPack: () => void
  openImageInModal: (src: string) => void
  isDisplayData: boolean
}

export const PackControlPanel = (props: PackControlPanelType) => {
  const {
    packId,
    packName,
    packImage,
    packIsPrivate,
    isMyPack,
    question,
    setQuestion,
    handleCreateCard,
    handleUpdatePack,
    handleRemovePack,
    onClickLearnPack,
    openImageInModal,
    isDisplayData,
  } = props

  const [isOpenModalAddOpen, setIsOpenModalAddOpen] = useState<boolean>(false)
  const [isEditPackModalOpen, setEditPackModalOpen] = useState<boolean>(false)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)
  const navigate = useNavigate()

  return (
    <div className={s.container}>
      <Typography variant={'body_2'} onClick={() => navigate(-1)} className={s.backArrow}>
        <ArrowLeftIcon /> Back to Decks List
      </Typography>

      <AddCardModal
        title={'Add New Card'}
        isOpenAddCard={isOpenModalAddOpen}
        setIsOpenAddCard={setIsOpenModalAddOpen}
        actionButtonText={'Add New Card'}
        onSubmitHandler={handleCreateCard}
      />

      <div className={s.title}>
        <div className={s.namePack}>
          <Typography variant={'large'}>{packName}</Typography>
          {isMyPack && (
            <DropdownPackMenu
              packId={packId}
              packName={packName}
              packImage={packImage}
              packIsPrivate={packIsPrivate}
              isEditPackModalOpen={isEditPackModalOpen}
              setEditPackModalOpen={setEditPackModalOpen}
              isDeleteModalOpen={isDeleteModalOpen}
              setDeleteModalOpen={setDeleteModalOpen}
              onEdit={handleUpdatePack}
              onDelete={handleRemovePack}
              onClickLearnPack={onClickLearnPack}
            />
          )}
        </div>
        {isMyPack ? (
          <Button variant={'primary'} onClick={() => setIsOpenModalAddOpen(!isOpenModalAddOpen)}>
            Add new Card
          </Button>
        ) : (
          isDisplayData && (
            <Button variant={'primary'} onClick={() => onClickLearnPack()}>
              Learn to Pack
            </Button>
          )
        )}
      </div>
      <div className={s.packCover}>
        <BlurHashCanvas
          src={packImage ? packImage : packImg}
          alt={'pack'}
          className={s.cover}
          blurWidth={150}
          blurHeight={100}
          onClick={() => openImageInModal(packImage ? packImage : packImg)}
        />
      </div>
      <div className={s.search}>
        <TextField
          type={'search'}
          placeholder={'search'}
          value={question}
          onChange={e => setQuestion(e.currentTarget.value)}
          className={''}
        />
      </div>
    </div>
  )
}