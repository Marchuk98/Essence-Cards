import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const shema = z.object({
  nickName: z
    .string()
    .trim()
    .nonempty('Required')
    .min(3, 'must be at least 3 characters')
    .optional(),
})

export type ProfileFormInput = z.infer<typeof shema>

export const UseProfileForm = () => {
  return useForm<ProfileFormInput>({
    resolver: zodResolver(shema),
    defaultValues: { nickName: '' },
  })
}
