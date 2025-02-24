import { PATH, useDebounce, useSort } from '../../../common'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import {
  selectCardAnswer,
  selectCardCurrentPage,
  selectCardItemsPerPage,
  selectCardOrderBy,
  selectCardQuestion,
} from '../cards-endpoints/cards.params.selectors.ts'
import { useNavigate, useParams } from 'react-router-dom'
import {
  useCreateCardMutation,
  useDeletePackMutation,
  useGetCardsQuery,
  useGetPackQuery,
  useUpdatePackMutation,
} from '../../packs/packs-endpoints/packs.api.ts'
import { useGetMeQuery } from '../../auth'
import { cardsActions } from '../cards-endpoints/cards.params.slice.ts'
import { toast } from 'react-toastify'
import { columns } from '../../../components/cards/cards-table/columns-card-table.ts'

export const useCards = () => {
  const { sort, setSort } = useSort({ type: 'cards' })

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.appReducer.status)
  const question = useAppSelector(selectCardQuestion)
  const answer = useAppSelector(selectCardAnswer)
  const orderBy = useAppSelector(selectCardOrderBy)
  const page = useAppSelector(selectCardCurrentPage)
  const perPage = useAppSelector(selectCardItemsPerPage)
  const debounceAnswer = useDebounce(answer, 500)

  const { id: packId = '' } = useParams()

  const { data: userData } = useGetMeQuery()
  const { data: packData } = useGetPackQuery({ id: packId })
  const [createCard] = useCreateCardMutation()
  const [updatePack] = useUpdatePackMutation()
  const [removePack] = useDeletePackMutation()

  const { data: cardsData, isFetching } = useGetCardsQuery({
    id: packId,
    answer: debounceAnswer,
    question: question,
    itemsPerPage: perPage,
    currentPage: page,
    orderBy: orderBy,
  })

  const packName = packData?.name || 'Friends Pack'
  const packImage = packData?.cover || ''
  const packIsPrivate = packData?.isPrivate || false
  const myId = userData?.id || ''
  const authorPackId = packData?.userId || ''
  const isMe = myId === authorPackId
  const totalCount = cardsData?.pagination.totalPages || 0
  const isEmptyPack = cardsData?.items.length === 0
  const isDisplayData = cardsData?.items.length !== 0
  const preparedColumns = isMe ? columns : columns.filter(column => column.key !== 'actions')

  const setQuestion = (value: string) => {
    dispatch(cardsActions.setQueryParams({ question: value }))
  }

  const setPage = (page: number) => {
    dispatch(cardsActions.setQueryParams({ currentPage: page }))
  }

  const setPerPage = (perPage: string) => {
    dispatch(cardsActions.setQueryParams({ itemsPerPage: +perPage }))
  }

  const handleCreateCard = (data: FormData) => {
    createCard({ id: packId || '', data })
  }

  const handleUpdatePack = (formData: FormData) => {
    updatePack({ id: packId || '', formData })
  }

  const handleRemovePack = () => {
    removePack({ id: packId })
    navigate(PATH.PACKS)
  }

  const handleClickToLearnPack = () => {
    if (cardsData?.items.length) {
      navigate(`${PATH.LEARN}/${packId}`)
    } else {
      toast.warning('Sorry, the pack is still empty')
    }
  }

  return {
    status,
    isFetching,
    isMe,
    packId,
    sort,
    setSort,
    setPage,
    setPerPage,
    setQuestion,
    totalCount,
    isEmptyPack,
    isDisplayData,
    preparedColumns,
    page,
    perPage,
    cardsData,
    packName,
    packImage,
    packIsPrivate,
    question,
    handleCreateCard,
    handleUpdatePack,
    handleRemovePack,
    handleClickToLearnPack,
  }
}
