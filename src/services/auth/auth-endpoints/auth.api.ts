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
      extraOptions: { maxRetries: 0 },
      providesTags: ['ME'],
    }),
    login: builder.mutation<ResponseLoginType, RequestLoginType>({
      query: body => {
        return {
          method: 'POST',
          url: 'auth/login',
          body,
        }
      },
      invalidatesTags: ['ME'],
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
    verifyMail: builder.mutation<unknown, { code: string }>({
      query: (body: { code: string }) => {
        return {
          method: 'POST',
          url: `auth/verify-email`,
          body,
        }
      },
    }),
    resendEmail: builder.mutation<void, { userId: string; html: string }>({
      query: (body: { userId: string; html: string }) => {
        return {
          method: 'POST',
          url: `auth/resend-verification-email`,
          body,
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
  useVerifyMailMutation,
  useResendEmailMutation,
  util,
} = authApi


