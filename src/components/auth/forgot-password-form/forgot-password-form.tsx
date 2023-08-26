import { ForgotPasswordInput, UseForgotPasswordForm, PATH } from '../../../common'
import { ControlledTextField } from '../../controlled'
import { Button, Card, Typography } from '../../ui'

import s from './forgot-password-form.module.scss'

export type ForgotPasswordFormProps = {
  onSubmitHandler: (data: ForgotPasswordInput) => void
}

export const ForgotPasswordForm = (props: ForgotPasswordFormProps) => {
  const { onSubmitHandler } = props

  const { handleSubmit, control, reset } = UseForgotPasswordForm()

  const onSubmit = handleSubmit(data => {
    onSubmitHandler({ email: data.email })
    reset()
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Forgot your password?
      </Typography>
      <form onSubmit={onSubmit}>
        <ControlledTextField
          label={'Email'}
          name={'email'}
          control={control}
          className={s.textField}
        />
        <Typography variant="body_2" color={'form'} className={s.description}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button type={'submit'} fullWidth className={s.forgotPasswordButton}>
          Send Instructions
        </Button>
      </form>
      <Typography variant="body_2" color={'form'} className={s.question}>
        {`Did you remember your password?`}
      </Typography>
      <Typography variant={'link_1'} as={'a'} href={PATH.LOGIN} className={s.signInLink}>
        Try logging in
      </Typography>
    </Card>
  )
}
