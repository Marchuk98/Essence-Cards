import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GetCardsRequestType } from '../../packs/packs-endpoints/packs.types.ts'

type initialStateType = {
  queryParams: Partial<GetCardsRequestType>
}

const initialState: initialStateType = {
  queryParams: {
    id: '',
    question: '',
    answer: '',
    orderBy: null,
    currentPage: 1,
    itemsPerPage: 10,
  },
}

const slice = createSlice({
  name: 'cardsParams',
  initialState,
  reducers: {
    setQueryParams: (state, action: PayloadAction<Partial<GetCardsRequestType>>) => {
      state.queryParams = { ...state.queryParams, ...action.payload }
    },
  },
})

export const cardsReducer = slice.reducer
export const cardsActions = slice.actions
