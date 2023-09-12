import { RootState } from '../../../app/store.ts'

export const selectCardId = (state: RootState) => state.cardsReducer.queryParams.id
export const selectCardQuestion = (state: RootState) => state.cardsReducer.queryParams.question
export const selectCardAnswer = (state: RootState) => state.cardsReducer.queryParams.answer
export const selectCardOrderBy = (state: RootState) => state.cardsReducer.queryParams.orderBy
export const selectCardCurrentPage = (state: RootState) => state.cardsReducer.queryParams.currentPage
export const selectCardItemsPerPage = (state: RootState) => state.cardsReducer.queryParams.itemsPerPage