import { useState } from 'react'
import { Sort } from '../../components/ui'

export const useSort = () => {
  const [sort, setSort] = useState<Sort>(null)
  const setSortValue = (sort: Sort, handler: (sort: string) => void) => {
    const sortValue =
      sort?.direction === undefined || null ? '' : `${sort?.columnKey}-${sort?.direction}`

    handler(sortValue)
  }

  return {
    sort,
    setSort,
    setSortValue,
  }
}
