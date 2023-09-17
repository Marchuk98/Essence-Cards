import { Pagination, Table, Typography } from '../ui'
import { CardsTableBody } from './cards-table/cards-table-body.tsx'
import { useCards } from '../../services/cards/hooks/useCards.ts'
import { PackControlPanel } from './pack-control-panel/pack-control-panel.tsx'
import { ImageModal } from '../modals-actions/image-modal/image-modal.tsx'
import { useImageOpen } from '../../common/constants/useImageOpen.ts'
import { useDispatch } from 'react-redux'
import { cardsActions } from '../../services/cards/cards-endpoints/cards.params.slice.ts'

import s from './cards-main.module.scss'
import { MainLoader } from '../../assets/loaders/main-loader'

export const CardsMain = () => {
  const {
    sort,
    setSort,
    setSortValue,
    setPage,
    setPerPage,
    totalCount,
    isEmptyPack,
    isDisplayData,
    preparedColumns,
    page,
    perPage,
    packName,
    packImage,
    packIsPrivate,
    cardsData,
    packId,
    question,
    setQuestion,
    status,
    isLoading,
    isMe,
    handleCreateCard,
    handleUpdatePack,
    handleRemovePack,
    handleClickToLearnPack,
  } = useCards()

  const { openImageInModal, setImageModalOpen, image, isImageModalOpen } = useImageOpen()
  const dispatch = useDispatch()

  if (isLoading) return <MainLoader />

  return (
    <>
      <ImageModal
        src={image}
        alt={'image-modal'}
        isOpen={isImageModalOpen}
        setIsOpen={setImageModalOpen}
      />

      <PackControlPanel
        packName={packName}
        packImage={packImage}
        packIsPrivate={packIsPrivate}
        packId={packId}
        isMyPack={isMe}
        handleCreateCard={handleCreateCard}
        handleUpdatePack={handleUpdatePack}
        handleRemovePack={handleRemovePack}
        onClickLearnPack={handleClickToLearnPack}
        question={question}
        setQuestion={setQuestion}
        openImageInModal={openImageInModal}
        isDisplayData={isDisplayData}
        status={status}
      />

      {cardsData && !isEmptyPack && (
        <>
          <Table.Root className={s.tableRoot}>
            <Table.Head
              columns={preparedColumns}
              sort={sort}
              onSort={newSort => {
                setSort(newSort)
                setSortValue(newSort, sortValue => {
                  dispatch(cardsActions.setQueryParams({ orderBy: sortValue }))
                })
              }}
            />

            <CardsTableBody
              cardContent={cardsData?.items}
              isMe={isMe}
              isMyPack={isMe}
              openImageInModal={openImageInModal}
            />
          </Table.Root>
        </>
      )}

      {isEmptyPack && (
        <Typography variant={'h2'} className={s.emptyPack}>
          {question ? 'No cards found' : 'Pack is empty'}
        </Typography>
      )}

      {cardsData && !isEmptyPack && (
        <Pagination
          onChange={setPage}
          totalCount={totalCount}
          siblings={3}
          perPage={perPage || 10}
          page={page || 1}
          onPerPageChange={setPerPage}
          perPageOptions={['3', '5', '10']}
        />
      )}
    </>
  )
}

