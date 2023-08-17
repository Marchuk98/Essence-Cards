import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().trim().nonempty('Type name required').min(3, 'must be at least 3 characters'),
})

export type ProfileFieldForm = z.infer<typeof schema>

export const UseProfileFieldForm = (initialValue: string) => {
  return useForm<ProfileFieldForm>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      name: initialValue,
    },
  })
}
