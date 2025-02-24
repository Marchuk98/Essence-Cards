import { commonApi } from '../../common/base-query-with-reauth.ts'

import {
  CardType,
  CreatePackRequestType,
  GetCardsRequestType,
  GetCardsResponseType,
  GetParamsPacksType,
  GradesParamsCardType,
  PackType,
  ResponsePacksType,
  UpdatePackResponseType,
} from './packs.types.ts'

export const packsApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    getPacks: builder.query<ResponsePacksType, GetParamsPacksType>({
      query: params => {
        return {
          method: 'GET',
          url: 'v2/decks',
          params,
        }
      },
      providesTags: ['UPDATE_PACKS'],
    }),
    createPack: builder.mutation<PackType, CreatePackRequestType>({
      query: body => {
        return {
          method: 'POST',
          url: 'v1/decks',
          body,
        }
      },
      invalidatesTags: ['UPDATE_PACKS'],
    }),
    getPack: builder.query<PackType, { id: string }>({
      query: ({ id }) => {
        return {
          method: 'GET',
          url: `v1/decks/${id}`,
        }
      },
      providesTags: ['UPDATE_PACKS'],
    }),
    updatePack: builder.mutation<PackType, UpdatePackResponseType>({
      query: data => {
        return {
          method: 'PATCH',
          url: `v1/decks/${data.id}`,
          body: data.formData,
        }
      },
      invalidatesTags: ['UPDATE_PACKS'],
    }),
    deletePack: builder.mutation<Omit<PackType, 'author'>, { id: string }>({
      query: param => {
        return {
          method: 'DELETE',
          url: `v1/decks/${param.id}`,
        }
      },
      invalidatesTags: ['UPDATE_PACKS'],
    }),
    getCards: builder.query<GetCardsResponseType, GetCardsRequestType>({
      query: args => {
        const { id, ...params } = args

        return {
          method: 'GET',
          url: `v1/decks/${id}/cards`,
          params: params,
        }
      },
      providesTags: ['UPDATE_CARDS'],
    }),
    createCard: builder.mutation<CardType, { id: string; data: FormData }>({
      query: ({ id, data }) => {
        return {
          method: 'POST',
          url: `v1/decks/${id}/cards`,
          body: data,
        }
      },
      invalidatesTags: ['UPDATE_CARDS'],
    }),
    learnPack: builder.query<CardType, { id: string }>({
      query: ({ id }) => {
        return {
          method: 'GET',
          url: `v1/decks/${id}/learn`,
        }
      },
      providesTags: ['LEARN_CARD'],
    }),
    updateCardGrade: builder.mutation<void, GradesParamsCardType & GetCardsRequestType>({
      query: ({ id, ...body }) => {
        return {
          method: 'POST',
          url: `v1/decks/${id}/learn`,
          body,
        }
      },
      invalidatesTags: ['UPDATE_CARDS', 'LEARN_CARD'],
    }),
  }),
  overrideExisting: true,
})

export const {
  useGetPacksQuery,
  useCreatePackMutation,
  useGetPackQuery,
  useUpdatePackMutation,
  useDeletePackMutation,
  useGetCardsQuery,
  useCreateCardMutation,
  useLearnPackQuery,
  useUpdateCardGradeMutation,
} = packsApi
