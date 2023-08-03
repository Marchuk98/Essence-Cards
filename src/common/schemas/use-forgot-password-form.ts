import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
})

export type ForgotPasswordInput = z.infer<typeof schema>

export const UseForgotPasswordForm = () => {
  return useForm<ForgotPasswordInput>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
    },
  })
}
