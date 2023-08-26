import { ResponseUserType } from '../../auth'
import { GradeType } from '../../../components/ui'

type PackAuthorType = Pick<ResponseUserType, 'id' | 'name'>

export type ItemType = {
  author: PackAuthorType
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover?: string
  rating: number
  created: string
  updated: string
  cardsCount: number
}

export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type ResponsePacksType = {
  items: ItemType[]
  pagination: PaginationType
  maxCardsCount: number
}

export type GetParamsPacksType = {
  minCardsCount?: number
  maxCardsCount?: number
  name?: string
  authorId?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
}

export type CreatePackRequestType = FormData

export type UpdatePackResponseType = { formData: CreatePackRequestType; id: string }

export type CardType = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
  rating: number
  created: string
  updated: string
  grade: number
}

export type GetCardsResponseType = {
  items: CardType[]
  pagination: PaginationType
}
export type GetCardsRequestType = {
  id: string
  question?: string
  answer: string
  orderBy: string
  currentPage: number
  itemsPerPage: number
}

export type GradesParamsCardType = {
  id: string
  cardId: string
  grade: GradeType
}


