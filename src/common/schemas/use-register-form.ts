import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z
  .object({
    email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
    password: z
      .string()
      .trim()
      .nonempty('Enter login')
      .min(8, 'Password must be at least 8 character'),
    confirmPassword: z.string().trim(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ['confirmPassword'],
  })

export type RegisterFormInputs = z.infer<typeof schema>

export const UseRegisterForm = (onSubmit: SubmitHandler<RegisterFormInputs>) => {
  const { handleSubmit, ...rest } = useForm<RegisterFormInputs>({
    resolver: zodResolver(schema),
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
