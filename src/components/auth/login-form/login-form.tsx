import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../ui/button'
import { ControlledTextField } from '../../controlled'
import { ControlledCheckbox } from '../../controlled/controlled-checkbox'
import { Card } from '../../ui/card'

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

type LoginFormProps = z.infer<typeof schema>

export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  console.log(errors)

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <ControlledTextField label={'login'} name={'login'} control={control} />
        <ControlledTextField label={'email'} name={'email'} control={control} />
        <ControlledTextField label={'password'} name={'password'} control={control} />
        <ControlledCheckbox label={'Remember me'} name={'rememberMe'} control={control} />
        <Button type={'submit'} fullWidth={true}>Submit</Button>
      </form>
    </Card>
  )
}