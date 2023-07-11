import { Button, Card, Typography } from '../../ui'
import { ControlledCheckbox, ControlledTextField } from '../../controlled'
import { LoginFormInputs, useLoginForm } from '../../../common/schemas'

import s from './login-form.module.scss'

type LoginFormProps = {
  onSubmit: (data: LoginFormInputs) => void
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const { handleSubmit, control } = useLoginForm(onSubmit)

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
          className={s.textField}
        />
        <ControlledTextField
          label={'Password'}
          name={'password'}
          type={'password'}
          control={control}
          className={s.textField}
        />
        <ControlledCheckbox
          label={'Remember me'}
          name={'rememberMe'}
          control={control}
          className={s.checkbox}
        />
        <Typography variant="body_2" as={'p'} className={s.forgotPassword}>
          Forgot password?
        </Typography>

        <Button type={'submit'} fullWidth>
          Sign In
        </Button>
      </form>
      <Typography variant="body_2" className={s.noAccount}>
        {`Don't have an account?`}
      </Typography>
      <Typography variant={'link_1'} as={'p'} className={s.signUpLink}>
        Sign Up
      </Typography>
    </Card>
  )
}
