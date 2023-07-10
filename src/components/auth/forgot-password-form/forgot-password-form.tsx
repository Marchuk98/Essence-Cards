import { ForgotPasswordInput, UseForgotPasswordForm } from '../../../common/schemas'

import { ControlledTextField } from '../../controlled'

import { Button, Card, Typography } from '../../ui'

import s from './forgot-password-form.module.scss'

export type ForgotPasswordFormProps = {
  linkPath: string
  onSubmit: (data: ForgotPasswordInput) => void
}

export const ForgotPasswordForm = (props: ForgotPasswordFormProps) => {
  const { onSubmit, linkPath } = props

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = UseForgotPasswordForm(onSubmit)

  console.log(errors)

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Forgot Password
      </Typography>
      <form onSubmit={handleSubmit}>
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
      <Button as={'a'} variant={'link'} className={s.link} href={linkPath}>
        Try logging in
      </Button>
    </Card>
  )
}