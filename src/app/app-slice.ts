import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export type StatusType = 'idle' | 'loading' | 'failed' | 'succeeded'

type AppInitialStateType = {
  status: StatusType
}

const initialState: AppInitialStateType = {
  status: 'idle',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        action => {
          return action.type.endsWith('/pending')
        },
        state => {
          state.status = 'loading'
        }
      )
      .addMatcher(
        action =>
          action.type.endsWith('executeMutation/rejected') ||
          action.type.endsWith('commonApi/executeQuery/rejected'),
        (state, action) => {
          if (action.type.endsWith('executeMutation/rejected')) {
            if (action.payload.data) {
              if (action.payload.data.message) {
                toast.error(action.payload.data.message)
                state.status = 'failed'

                return
              }
              toast.error(
                action.payload.data.errorMessages[0].message ||
                  action.payload.data.errorMessages[0] ||
                  action.payload.data.message
              )
              state.status = 'failed'
            } else {
              toast.error(`🦕${action.payload.error}`)
              state.status = 'failed'

              return
            }
          } else if (action.type.endsWith('commonApi/executeQuery/rejected')) {
            if (action.payload.data) {
              if (action.payload.data.statusCode === 401) {
                state.status = 'failed'

                return
              }
              if (action.payload.data.path.endsWith('me?')) {
                state.status = 'failed'

                return
              }
              if (action.payload.data.message) {
                toast.error(action.payload.data.message)
                state.status = 'failed'

                return
              }
            } else {
              toast.error(`🦕${action?.payload?.error}`)
              state.status = 'failed'

              return
            }
          }
        }
      )
      .addMatcher(
        action => {
          return action.type.endsWith('/fulfilled')
        },
        state => {
          state.status = 'succeeded'
        }
      )
  },
})

export const { reducer: appReducer, actions: appActions } = appSlice
