import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().trim().nonempty('Required').min(3, 'must be at least 3 characters').optional(),
})

export type ProfileFormInput = z.infer<typeof schema>

export const UseProfileForm = () => {
  return useForm<ProfileFormInput>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: { name: '' },
  })
}
