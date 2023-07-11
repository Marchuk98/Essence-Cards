import { SubmitHandler, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const shema = z.object({
  password: z
    .string()
    .trim()
    .nonempty('Enter login')
    .min(8, 'Password must be at least 8 character'),
})

export type CreateNewPasswordInput = z.infer<typeof shema>

export const UseCreateNewPassword = (onSubmit: SubmitHandler<CreateNewPasswordInput>) => {
  const { handleSubmit, ...rest } = useForm<CreateNewPasswordInput>({
    resolver: zodResolver(shema),
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
