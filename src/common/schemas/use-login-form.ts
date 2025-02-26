import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'

const schema = z.object({
  email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(3, 'Password must be at least 3 character')
    .max(30, 'Password must be no more 30 character'),
  rememberMe: z.boolean().optional(),
})

export type LoginFormInputs = z.infer<typeof schema>

export const useLoginForm = () => {
  return useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })
}
