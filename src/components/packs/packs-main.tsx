import { Button, Pagination, Table, Typography } from '../ui'
import { memo, useEffect, useState } from 'react'
import { FilterPanel } from '../ui/filter-panel'
import { usePacks } from '../../services/packs/hooks/usePacks.ts'
import { columns, PackTableBody } from './packs-table'
import { AddPackModal } from '../modals-actions'
import { useDispatch } from 'react-redux'
import { packsActions } from '../../services/packs/packs-endpoints/packs.params.slice.ts'
import { MainLoader } from '../../assets/loaders'
import { Skeleton } from '../ui/skeleton'

import s from './packs-main.module.scss'

export const PacksMain = memo(() => {
  const {
    isLoading,
    isFetching,
    status,
    isMe,
    myPacks,
    searchQuery,
    setSliderValues,
    perPage,
    page,
    sort,
    packsData,
    totalCount,
    resetFilters,
    setSortValue,
    setSort,
    setSearchQuery,
    setMyPacks,
    setPage,
    setPerPage,
    setSliderRange,
    sliderValues,
    createPack,
  } = usePacks()

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (packsData) {
      setSliderValues([0, packsData.maxCardsCount])
      setSliderRange([0, packsData.maxCardsCount])
    }
  }, [packsData?.maxCardsCount])

  return (
    <div className={s.container}>
      {isLoading ? (
        <MainLoader />
      ) : (
        <>
          <div className={s.title}>
            <Typography variant={'large'}>Packs list</Typography>
            <AddPackModal
              title={'Add New Pack'}
              trigger={
                <div>
                  <Button disabled={status === 'loading'} variant={'primary'}>
                    Add New Pack
                  </Button>
                </div>
              }
              setIsOpenAddPack={setIsOpenModal}
              onSubmitHandler={createPack}
              isOpenAddPack={isOpenModal}
            />
          </div>
          <div className={s.filterPanel}>
            <FilterPanel
              setMaxValue={packsData?.maxCardsCount ?? 100}
              setMyPacks={setMyPacks}
              myPack={myPacks || ''}
              searchValue={searchQuery || ''}
              setSearch={setSearchQuery}
              sliderValues={sliderValues}
              onValueCommit={setSliderRange}
              onValueChange={setSliderValues}
              isMe={isMe || ''}
              resetFilters={resetFilters}
              status={status}
            />
          </div>
          {packsData && packsData.items.length ? (
            <>
              <Table.Root>
                <Table.Head
                  columns={columns}
                  sort={sort}
                  onSort={newSort => {
                    setSort(newSort)
                    setSortValue(newSort, sortValue => {
                      dispatch(packsActions.setQueryParams({ orderBy: sortValue }))
                    })
                  }}
                />
                <PackTableBody
                  packContent={packsData?.items}
                  isMe={isMe || ''}
                  isFetching={isFetching}
                />
              </Table.Root>
              {isFetching ? (
                <div className={s.skeletonPagination}>
                  <Skeleton width={879} height={39} />
                </div>
              ) : (
                <Pagination
                  onChange={setPage}
                  totalCount={totalCount}
                  siblings={3}
                  perPage={perPage || 10}
                  page={page || 1}
                  onPerPageChange={setPerPage}
                  perPageOptions={['10', '20', '40']}
                />
              )}
            </>
          ) : (
            <Typography variant={'body_1'} className={s.emptyFindPack}>
              "Can't find any pack of cards"
            </Typography>
          )}
        </>
      )}
    </div>
  )
})