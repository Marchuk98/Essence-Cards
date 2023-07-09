import { Button, Typography } from '../../ui'
import { ControlledTextField } from '../../controlled'
import { ControlledCheckbox } from '../../controlled'
import { Card } from '../../ui'
import { LoginFormInputs, useLoginForm } from '../../../common/schemas'

import s from './login-form.module.scss'

type LoginFormProps = {
  onSubmit: (data: LoginFormInputs) => void
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useLoginForm(onSubmit)

  console.log(errors)

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Sign In
      </Typography>

      <form onSubmit={handleSubmit}>
        <ControlledTextField
          label={'Email'}
          name={'email'}
          control={control}
          className={s.text_field}
        />
        <ControlledTextField
          label={'Password'}
          name={'password'}
          control={control}
          className={s.text_field}
          variant={'password'}
        />
        <ControlledCheckbox
          label={'Remember me'}
          name={'rememberMe'}
          control={control}
          className={s.checkbox}
        />
        <Typography variant="body_2" as={'a'} className={s.forgotPassword}>
          Forgot password?
        </Typography>
        <Button type={'submit'} fullWidth>
          Submit
        </Button>
      </form>
      <Typography variant="body_2" className={s.noAccount}>
        {`Don't have an account?`}
      </Typography>
      <Typography as={'a'} href={'/sing-up'} className={s.signUpLink}>
        Sign Up
      </Typography>
    </Card>
  )
}
