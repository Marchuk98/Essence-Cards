import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const MAX_FILE_SIZE = 500000
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

export const schema = z.object({
  name: z
    .string()
    .trim()
    .nonempty('Please enter a name for the pack')
    .min(3, 'Pack name must be at least 3 characters')
    .max(30, 'Pack name must be at more 30 characters'),
  isPrivate: z.boolean().optional(),
  cover: z
    .any()
    .refine(file => file?.size <= MAX_FILE_SIZE, `Max file-input-preview size is 5MB.`)
    .refine(
      file => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    ),
})

export type AddPackForm = z.infer<typeof schema>

export const useAddPackForm = () => {
  return useForm<AddPackForm>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      isPrivate: false,
      cover: '',
    },
  })
}