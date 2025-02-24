import { useCreatePackMutation, useGetPacksQuery } from '../packs-endpoints/packs.api.ts'
import { useGetMeQuery } from '../../auth'
import { useState } from 'react'
import { useDebounce, useSort } from '../../../common'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import {
  selectPackAuthorId,
  selectPackCurrentPage,
  selectPackItemsPerPage,
  selectPackMaxCardsCount,
  selectPackMinCardsCount,
  selectPackName,
  selectPackOrderBy,
} from '../packs-endpoints/packs.params.selectors.ts'
import { packsActions } from '../packs-endpoints/packs.params.slice.ts'

export const usePacks = () => {
  const { setSort, sort } = useSort({ type: 'packs' })
  const { data: authData } = useGetMeQuery()
  const [createPack] = useCreatePackMutation()
  const isMe = authData?.id

  const [sliderValues, setSliderValues] = useState<[number, number]>([0, 100])
  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.appReducer.status)
  const searchQuery = useAppSelector(selectPackName)
  const myPacks = useAppSelector(selectPackAuthorId)
  const orderBy = useAppSelector(selectPackOrderBy)
  const page = useAppSelector(selectPackCurrentPage)
  const perPage = useAppSelector(selectPackItemsPerPage)
  const min = useAppSelector(selectPackMinCardsCount)
  const max = useAppSelector(selectPackMaxCardsCount)
  const debounceSearch = useDebounce(searchQuery, 500)

  const {
    data: packsData,
    isLoading,
    isFetching,
  } = useGetPacksQuery({
    minCardsCount: min,
    maxCardsCount: max,
    name: debounceSearch,
    authorId: myPacks,
    orderBy: orderBy,
    currentPage: page,
    itemsPerPage: perPage,
  })

  const totalCount = packsData?.pagination.totalPages || 0

  const setSearchQuery = (searchQuery: string) => {
    dispatch(packsActions.setQueryParams({ name: searchQuery }))
  }
  const setMyPacks = (id: string) => {
    dispatch(packsActions.setQueryParams({ authorId: id, currentPage: 1 }))
  }

  const setPage = (page: number) => {
    dispatch(packsActions.setQueryParams({ currentPage: page }))
  }

  const setPerPage = (perPage: string) => {
    dispatch(packsActions.setQueryParams({ itemsPerPage: +perPage }))
  }

  const setSliderRange = (value: [number, number]) => {
    dispatch(packsActions.setQueryParams({ minCardsCount: value[0], maxCardsCount: value[1] }))
  }

  const resetFilters = () => {
    setSearchQuery('')
    setMyPacks('')
    dispatch(packsActions.setQueryParams({ orderBy: null }))
    setSort(null)
    if (packsData) {
      setSliderValues([0, packsData.maxCardsCount])
      setSliderRange([0, packsData.maxCardsCount])
    }
  }

  return {
    isFetching,
    isLoading,
    status,
    isMe,
    myPacks,
    searchQuery,
    setSliderValues,
    perPage,
    page,
    packsData,
    sort,
    setSort,
    setSearchQuery,
    setMyPacks,
    setPage,
    setPerPage,
    setSliderRange,
    totalCount,
    resetFilters,
    sliderValues,
    createPack,
  }
}
