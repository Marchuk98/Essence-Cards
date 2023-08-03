import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  password: z
    .string()
    .trim()
    .nonempty('Enter login')
    .min(3, 'Password must be at least 3 character'),
})

export type CreateNewPasswordInput = z.infer<typeof schema>

export const UseCreateNewPassword = () => {
  return useForm<CreateNewPasswordInput>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      password: '',
    },
  })
}
