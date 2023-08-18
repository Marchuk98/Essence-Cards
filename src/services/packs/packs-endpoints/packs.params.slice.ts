import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GetCardsRequestType, GetParamsPacksType } from './packs.types.ts'

type initialStateType = {
  queryParams: GetParamsPacksType
}

const initialState: initialStateType = {
  queryParams: {
    minCardsCount: undefined,
    maxCardsCount: undefined,
    name: '',
    authorId: '',
    orderBy: '',
    currentPage: 1,
    itemsPerPage: 10,
  },
}

const slice = createSlice({
  name: 'packsParams',
  initialState,
  reducers: {
    setQueryParams: (state, action: PayloadAction<Partial<GetCardsRequestType>>) => {
      state.queryParams = { ...state.queryParams, ...action.payload }
    },
  },
})

export const packsReducer = slice.reducer
export const packsActions = slice.actions
