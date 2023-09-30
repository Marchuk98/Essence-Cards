import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/query'
import { commonApi } from '../services/common/base-query-with-reauth.ts'
import { packsReducer } from '../services/packs/packs-endpoints/packs.params.slice.ts'
import { cardsReducer } from '../services/cards/cards-endpoints/cards.params.slice.ts'
import { appReducer } from './app-slice.ts'

export const store = configureStore({
  reducer: {
    packsReducer,
    cardsReducer,
    appReducer,
    [commonApi.reducerPath]: commonApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(commonApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

setupListeners(store.dispatch)
