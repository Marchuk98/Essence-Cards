import { Pagination, Sort, Table, Typography } from '../ui'
import { CardsTableBody } from './cards-table'
import { useCards } from '../../services/cards/hooks/useCards.ts'
import { PackControlPanel } from './pack-control-panel'
import { ImageModal } from '../modals-actions/image-modal'
import { useImageOpen } from '../../common/constants/useImageOpen.ts'

import s from './cards-main.module.scss'

export const CardsMain = () => {
  const {
    sort,
    setSort,
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
    isFetching,
    isMe,
    handleCreateCard,
    handleUpdatePack,
    handleRemovePack,
    handleClickToLearnPack,
  } = useCards()

  const { openImageInModal, setImageModalOpen, image, isImageModalOpen } = useImageOpen()

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
        isFetching={isFetching}
        cardsData={cardsData}
        status={status}
      />

      {cardsData && !isEmptyPack && (
        <>
          <Table.Root className={s.tableRoot}>
            <Table.Head
              columns={preparedColumns}
              sort={sort}
              onSort={(newSort: Sort) => {
                setSort(newSort)
              }}
            />
            <CardsTableBody
              cardContent={cardsData?.items}
              isMe={isMe}
              openImageInModal={openImageInModal}
              isFetching={isFetching}
            />
          </Table.Root>
        </>
      )}

      <Pagination
        onChange={setPage}
        totalCount={totalCount}
        siblings={3}
        perPage={perPage || 10}
        page={page || 1}
        onPerPageChange={setPerPage}
        perPageOptions={['3', '5', '10']}
      />
      {isEmptyPack && (
        <Typography variant={'h2'} className={s.emptyPack}>
          {question ? 'No cards found' : 'Pack is empty'}
        </Typography>
      )}
    </>
  )
}
