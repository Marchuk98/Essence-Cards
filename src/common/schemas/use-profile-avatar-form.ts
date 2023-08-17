import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const MAX_FILE_SIZE = 500000
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

const schema = z.object({
  avatar: z
    .any()
    .refine(file => file?.size <= MAX_FILE_SIZE, `Max file-input-preview size is 5MB.`)
    .refine(
      file => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    ),
})

export type ProfileAvatarForm = z.infer<typeof schema>

export const UseProfileAvatarForm = () => {
  return useForm<ProfileAvatarForm>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })
}
