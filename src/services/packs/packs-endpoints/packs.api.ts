import { commonApi } from '../../common/base-query-with-reauth.ts'

import { RootState } from '../../../app/store.ts'

import {
  CardType,
  CreatePackRequestType,
  GetCardsRequestType,
  GetCardsResponseType,
  GetParamsPacksType,
  GradesParamsCardType,
  ItemType,
  ResponsePacksType,
  UpdatePackResponseType,
} from './packs.types.ts'

export const packsApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    getPacks: builder.query<ResponsePacksType, GetParamsPacksType>({
      query: params => {
        return {
          method: 'GET',
          url: 'decks',
          params,
        }
      },
      providesTags: ['packs'],
    }),
    createPack: builder.mutation<ItemType, CreatePackRequestType>({
      query: body => {
        return {
          method: 'POST',
          url: 'decks',
          body,
        }
      },
      invalidatesTags: ['packs'],
    }),
    getPack: builder.query<ItemType, string>({
      query: id => {
        return {
          method: 'GET',
          url: `decks/${id}`,
        }
      },
      providesTags: ['packs'],
    }),
    updatePack: builder.mutation<ItemType, UpdatePackResponseType>({
      query: ({ id, cover, name, isPrivate }) => {
        return {
          method: 'PATCH',
          url: `decks/${id}`,
          body: { name, cover, isPrivate },
        }
      },
      invalidatesTags: ['packs'],
    }),
    deletePack: builder.mutation<Omit<ItemType, 'author'>, string>({
      query: id => {
        return {
          method: 'DELETE',
          url: `decks/${id}`,
        }
      },
      invalidatesTags: ['packs'],
    }),
    getCards: builder.query<GetCardsResponseType, { id: string; data: GetCardsRequestType }>({
      query: ({ id, data }) => {
        return {
          method: 'GET',
          url: `decks/${id}/cards`,
          params: data,
        }
      },
      providesTags: ['cards'],
    }),
    createCard: builder.mutation<CardType, { id: string; data: FormData }>({
      query: ({ id, data }) => {
        return {
          method: 'POST',
          url: `decks/${id}/cards`,
          body: data,
        }
      },
      invalidatesTags: ['cards'],
    }),
    learnPack: builder.query<CardType, string>({
      query: id => {
        return {
          method: 'GET',
          url: `decks/${id}/learn`,
        }
      },
    }),
    updateCardGrade: builder.mutation<void, GradesParamsCardType & GetCardsRequestType>({
      query: ({ id, ...body }) => {
        return {
          method: 'POST',
          url: `decks/${id}/learn`,
          body,
        }
      },
      async onQueryStarted({ id, grade, cardId }, { dispatch, queryFulfilled, getState }) {
        const state = getState() as RootState
        const patchResult = dispatch(
          packsApi.util.updateQueryData(
            'getCards',
            {
              id,
              data: {
                itemsPerPage: +state.cardsReducer.pageSize,
                currentPage: state.cardsReducer.page,
                orderBy: state.cardsReducer.orderBy,
                answer: state.cardsReducer.nameToSearch,
              },
            },
            draft => {
              const card = draft.items.find(card => {
                return card.id === cardId
              })

              if (card) card.grade = grade
            }
          )
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: ['cards', 'card'],
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
