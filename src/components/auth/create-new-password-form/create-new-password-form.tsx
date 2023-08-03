import { ControlledTextField } from '../../controlled'

import { CreateNewPasswordInput, UseCreateNewPassword } from '../../../common'
import { Button, Card, Typography } from '../../ui'

import s from './create-new-password-form.module.scss'

export type CreateNewPasswordFormProps = {
  onSubmitHandler: (data: CreateNewPasswordInput) => void
}

export const CreateNewPasswordForm = (props: CreateNewPasswordFormProps) => {
  const { onSubmitHandler } = props

  const { handleSubmit, control, reset } = UseCreateNewPassword()

  const onSubmit = handleSubmit(data => {
    onSubmitHandler({ password: data.password })
    reset()
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Create new password
      </Typography>
      <form onSubmit={onSubmit}>
        <ControlledTextField
          label={'Password'}
          name={'password'}
          type={'password'}
          control={control}
          className={s.textField}
          autoComplete="new-password"
        />
        <div>
          <Typography variant="body_2" color={'form'} className={s.description}>
            Create new password and we will send you further instructions to email
          </Typography>
        </div>
        <Button fullWidth type={'submit'}>
          Create new password
        </Button>
      </form>
    </Card>
  )
}
