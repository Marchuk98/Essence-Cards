import { Button, Pagination, Table, Typography } from '../ui'
import { useEffect, useState } from 'react'
import { FilterPanel } from '../ui/filter-panel'
import { usePacks } from '../../services/packs/hooks/usePacks.ts'
import { columns } from '../../common'
import { PackTableBody } from './packs-table'
import { AddPackModal } from '../modals-actions'

import s from './packs-main.module.scss'

export const PacksMain = () => {
  const {
    isMe,
    myPacks,
    searchQuery,
    setSliderValues,
    perPage,
    page,
    packsData,
    sort,
    setSortValue,
    setSearchQuery,
    setMyPacks,
    setPage,
    setPerPage,
    setSliderRange,
    totalCount,
    resetFilters,
    sliderValues,
    createPack,
  } = usePacks()

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  useEffect(() => {
    if (packsData) {
      setSliderValues([0, packsData.maxCardsCount])
      setSliderRange([0, packsData.maxCardsCount])
    }
  }, [packsData?.maxCardsCount])

  return (
    <div className={s.container}>
      <div className={s.title}>
        <Typography variant={'large'}>Packs list</Typography>
        <Button variant={'primary'} onClick={() => setIsOpenModal(true)}>
          Add New Pack
        </Button>
      </div>
      <AddPackModal
        title={'Add New Pack'}
        trigger={<></>}
        setIsOpenAddPack={setIsOpenModal}
        onSubmitHandler={createPack}
        isOpenAddPack={isOpenModal}
      />
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
        />
      </div>
      <Table.Root>
        <Table.Head columns={columns} sort={sort} onSort={setSortValue} />
        {packsData && <PackTableBody packContent={packsData?.items} />}
      </Table.Root>
      <Pagination
        onChange={setPage}
        totalCount={totalCount}
        siblings={3}
        perPage={perPage || 10}
        page={page || 1}
        onPerPageChange={setPerPage}
        perPageOptions={['10', '20', '40']}
      />
    </div>
  )
}