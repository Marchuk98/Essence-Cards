import { commonApi } from '../../common/base-query-with-reauth.ts'

import {
  RequestLoginType,
  RequestRecoveryPasswordType,
  RequestRegisterType,
  RequestResetPasswordType,
  ResponseLoginType,
  ResponseRegisterType,
  ResponseUserType,
} from './auth.types.ts'

export const authApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<ResponseUserType | null, void>({
      query: () => {
        return {
          method: 'GET',
          url: 'auth/me',
        }
      },
      extraOptions: { maxRetries: false },
      providesTags: ['me'],
    }),
    login: builder.mutation<ResponseLoginType, RequestLoginType>({
      query: body => {
        return {
          method: 'POST',
          url: 'auth/login',
          body,
        }
      },
      invalidatesTags: ['me'],
    }),
    registration: builder.mutation<ResponseRegisterType, RequestRegisterType>({
      query: body => {
        return {
          method: 'POST',
          url: 'auth/sign-up',
          body,
        }
      },
    }),
    recoveryPassword: builder.mutation<unknown, RequestRecoveryPasswordType>({
      query: body => {
        return {
          method: 'POST',
          url: 'auth/recover-password',
          body,
        }
      },
    }),
    resetPassword: builder.mutation<unknown, RequestResetPasswordType>({
      query: ({ token, password }) => {
        return {
          method: 'POST',
          url: `auth/reset-password/${token}`,
          body: { password },
        }
      },
    }),
    logout: builder.mutation<unknown, void>({
      query: () => {
        return {
          method: 'POST',
          url: 'auth/logout',
        }
      },
    }),
  }),
})

export const {
  useGetMeQuery,
  useLoginMutation,
  useRegistrationMutation,
  useRecoveryPasswordMutation,
  useResetPasswordMutation,
  useLogoutMutation,
  util,
} = authApi


