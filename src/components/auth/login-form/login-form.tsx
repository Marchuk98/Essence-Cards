import { Button, Card, Typography } from '../../ui'
import { ControlledCheckbox, ControlledTextField } from '../../controlled'
import { LoginFormInputs, useLoginForm } from '../../../common'

import s from './login-form.module.scss'
import { PATH } from '../../../common'

type LoginFormProps = {
  onSubmitHandler: (data: LoginFormInputs) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const { onSubmitHandler } = props

  const { handleSubmit, control } = useLoginForm()

  const onSubmit = handleSubmit(onSubmitHandler)

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Sign In
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
        <ControlledCheckbox
          label={'Remember me'}
          name={'rememberMe'}
          control={control}
          className={s.checkbox}
        />
        <Typography
          variant="body_2"
          as={'a'}
          className={s.forgotPassword}
          href={PATH.PASSWORD_RECOVERY}
        >
          Forgot password?
        </Typography>

        <Button type={'submit'} fullWidth>
          Sign In
        </Button>
        <Typography variant="body_2" className={s.noAccount}>
          {`Don't have an account?`}
        </Typography>
        <Typography variant={'link_1'} as={'a'} href={PATH.REGISTRATION} className={s.signUpLink}>
          Sign Up
        </Typography>
      </form>
    </Card>
  )
}
