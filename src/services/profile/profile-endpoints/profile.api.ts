import { commonApi } from '../../common/base-query-with-reauth.ts'
import { RequestDataUpdateMe, ResponseUpdateMe } from './profile.type.ts'

export const profileApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    updateUser: builder.mutation<ResponseUpdateMe, RequestDataUpdateMe>({
      query: body => {
        return {
          method: 'PATCH',
          url: 'auth/me',
          body,
        }
      },
      invalidatesTags: ['ME'],
    }),
  }),
})

export const { useUpdateUserMutation } = profileApi