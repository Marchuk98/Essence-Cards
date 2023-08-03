import { PATH, RegisterFormInputs, UseRegisterForm } from '../../../common'
import { Button, Card, Typography } from '../../ui'
import { ControlledTextField } from '../../controlled'

import s from './register-form.module.scss'

export type RegisterFormProps = {
  onSubmitHandler: (data: Omit<RegisterFormInputs, 'confirmPassword'>) => void
}

export const RegisterForm = (props: RegisterFormProps) => {
  const { onSubmitHandler } = props

  const { handleSubmit, control, reset } = UseRegisterForm()

  const onSubmit = handleSubmit(data => {
    onSubmitHandler({ email: data.email, password: data.password })
    reset()
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Sign Up
      </Typography>

      <form onSubmit={onSubmit}>
        <ControlledTextField
          label={'Email'}
          name={'email'}
          control={control}
          className={s.textField}
          autoComplete="username"
        />
        <ControlledTextField
          label={'Password'}
          name={'password'}
          type={'password'}
          control={control}
          className={s.textField}
          autoComplete="current-password"
        />
        <ControlledTextField
          label={'Confirm password'}
          name={'confirmPassword'}
          type={'password'}
          control={control}
          className={s.textField}
          autoComplete="confirm-password"
        />
        <Button type={'submit'} fullWidth className={s.registerAccountButton}>
          Submit
        </Button>
        <Typography variant="body_2" color={'form'} className={s.accountCreated}>
          {`Already have an account?`}
        </Typography>
        <Typography variant={'link_1'} as={'a'} href={PATH.LOGIN} className={s.signInLink}>
          Sign In
        </Typography>
      </form>
    </Card>
  )
}
