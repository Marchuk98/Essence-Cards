import { RegisterFormInputs, UseRegisterForm } from '../../../common/schemas'
import { Button, Card, Typography } from '../../ui'
import { ControlledTextField } from '../../controlled'

import s from './register-form.module.scss'

export type RegisterFormProps = {
  linkPath: string
  onSubmit: (data: RegisterFormInputs) => void
}

export const RegisterForm = (props: RegisterFormProps) => {
  const { onSubmit, linkPath } = props

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = UseRegisterForm(onSubmit)

  console.log(errors)

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Sign Up
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
        <ControlledTextField
          label={'Confirm password'}
          name={'confirmPassword'}
          type={'password'}
          control={control}
          className={s.textField}
        />
        <Button type={'submit'} fullWidth className={s.registerAccountButton}>
          Submit
        </Button>
      </form>
      <Typography variant="body_2" color={'form'} className={s.accountCreated}>
        {`Already have an account?`}
      </Typography>
      <Typography as={'a'} href={linkPath} className={s.signInLink}>
        Sign In
      </Typography>
    </Card>
  )
}