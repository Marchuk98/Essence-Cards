import { commonApi } from '../../common/base-query-with-reauth.ts'
import { CardType } from '../../packs/packs-endpoints/packs.types.ts'

export const cardsApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    getCard: builder.query<CardType, string>({
      query: id => ({
        url: `v1/cards/${id}`,
      }),
      providesTags: ['LEARN_CARD'],
    }),
    updateCard: builder.mutation<CardType, UpdateCardRequestType>({
      query: ({ id, ...body }) => ({
        method: 'PATCH',
        url: `v1/cards/${id}`,
        body: body.data,
      }),
      invalidatesTags: ['UPDATE_CARDS', 'LEARN_CARD'],
    }),
    deleteCard: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        method: 'DELETE',
        url: `v1/cards/${id}`,
      }),
      invalidatesTags: ['UPDATE_CARDS', 'LEARN_CARD'],
    }),
  }),
})

export const { useGetCardQuery, useUpdateCardMutation, useDeleteCardMutation } = cardsApi
