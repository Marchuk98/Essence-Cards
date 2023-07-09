import { SubmitHandler, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'

const schema = z.object({
  login: z.string().trim().nonempty('Enter login').min(3, 'Login must be at least 3 character'),
  password: z
    .string()
    .trim()
    .nonempty('Enter login')
    .min(8, 'Password must be at least 8 character'),
  rememberMe: z.literal<boolean>(true, {
    errorMap: () => {
      return { message: 'You must agree to the terms and condition' }
    },
  }),
  email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
})

export type LoginFormInputs = z.infer<typeof schema>

export const useLoginForm = (onSubmit: SubmitHandler<LoginFormInputs>) => {
  const { handleSubmit, ...rest } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
