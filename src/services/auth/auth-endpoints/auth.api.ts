import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseUserType } from './auth.types.ts'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    credentials: 'include',
  }),
  endpoints: builder => ({
    me: builder.query<ResponseUserType, void>({
      query: () => ({
        url: 'auth/me',
      }),
    }),
    login: builder.mutation<any, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: 'auth/login',
        method: 'POST',
        body: { email, password },
      }),
    }),
  }),
})

export const { useMeQuery, useLoginMutation } = authApi


