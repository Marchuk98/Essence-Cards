import { RootState } from '../../../app/store.ts'

export const selectPackName = (state: RootState) => state.packsReducer.queryParams.name
export const selectPackAuthorId = (state: RootState) => state.packsReducer.queryParams.authorId
export const selectPackOrderBy = (state: RootState) => state.packsReducer.queryParams.orderBy
export const selectPackCurrentPage = (state: RootState) => state.packsReducer.queryParams.currentPage
export const selectPackItemsPerPage = (state: RootState) => state.packsReducer.queryParams.itemsPerPage
export const selectPackMinCardsCount = (state: RootState) => state.packsReducer.queryParams.minCardsCount
export const selectPackMaxCardsCount = (state: RootState) => state.packsReducer.queryParams.maxCardsCount
