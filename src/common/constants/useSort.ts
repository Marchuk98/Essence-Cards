import { useState } from 'react'
import { Sort } from '../../components/ui'
import { useAppDispatch } from '../../app/store.ts'
import {
  OrderByCardsType,
  OrderByPacksType,
} from '../../services/packs/packs-endpoints/packs.types.ts'
import { cardsActions } from '../../services/cards/cards-endpoints/cards.params.slice.ts'
import { packsActions } from '../../services/packs/packs-endpoints/packs.params.slice.ts'

type UseSortProps = {
  type: 'cards' | 'packs'
}

export const useSort = ({ type }: UseSortProps) => {
  const [sort, setSort] = useState<Sort>(null)
  const dispatch = useAppDispatch()

  const setSortValue = (newSort: Sort) => {
    setSort(newSort)

    if (type === 'cards') {
      let orderBy: OrderByCardsType = null

      if (newSort && newSort.direction) {
        const value = `${newSort.columnKey}-${newSort.direction}` as OrderByCardsType

        const validCardsValues: OrderByCardsType[] = [
          'question-asc',
          'question-desc',
          'answer-asc',
          'answer-desc',
          'created-asc',
          'created-desc',
          'grade-asc',
          'grade-desc',
          'updated-asc',
          'updated-desc',
        ]

        if (validCardsValues.includes(value)) {
          orderBy = value
        }
      }

      dispatch(cardsActions.setQueryParams({ orderBy }))
    } else {
      let orderBy: OrderByPacksType = null

      if (newSort && newSort.direction) {
        // Маппинг колонок на значения API для паков
        const columnMapping: Record<string, string> = {
          cards: 'cardsCount',
          updated: 'updated',
          name: 'name',
          'author.name': 'author.name',
          created: 'created',
        }

        const column = columnMapping[newSort.columnKey] || newSort.columnKey
        const value = `${column}-${newSort.direction}` as OrderByPacksType

        const validPacksValues: OrderByPacksType[] = [
          'cardsCount-asc',
          'updated-asc',
          'name-asc',
          'author.name-asc',
          'created-asc',
          'cardsCount-desc',
          'updated-desc',
          'name-desc',
          'author.name-desc',
          'created-desc',
        ]

        if (validPacksValues.includes(value)) {
          orderBy = value
        }
      }

      dispatch(packsActions.setQueryParams({ orderBy }))
    }
  }

  return {
    sort,
    setSort: setSortValue,
  }
}
