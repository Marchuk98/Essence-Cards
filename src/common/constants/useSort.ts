import { useState } from 'react'
import { Sort } from '../../components/ui'
import { packsActions } from '../../services/packs/packs-endpoints/packs.params.slice.ts'
import { useAppDispatch } from '../../app/store.ts'

export const useSort = () => {
  const [sort, setSort] = useState<Sort>(null)
  const dispatch = useAppDispatch()
  const setSortValue = (newSort: Sort) => {
    setSort(newSort)
    const sortValue =
      newSort?.direction === undefined || null ? '' : `${newSort?.columnKey}-${newSort?.direction}`

    dispatch(packsActions.setQueryParams({ orderBy: sortValue }))
  }

  return {
    sort,
    setSort,
    setSortValue,
  }
}
