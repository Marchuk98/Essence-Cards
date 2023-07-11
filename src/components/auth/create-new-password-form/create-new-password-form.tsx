import {
  CreateNewPasswordInput,
  UseCreateNewPassword,
} from '../../../common/schemas/use-create-new-password-form.ts'
import { Button, Card, Typography } from '../../ui'
import { ControlledTextField } from '../../controlled'
import s from './create-new-password-form.module.scss'

export type CreateNewPasswordFormProps = {
  linkPath?: string
  onSubmit: (data: CreateNewPasswordInput) => void
}

export const CreateNewPasswordForm = (props: CreateNewPasswordFormProps) => {
  const { onSubmit } = props

  const { handleSubmit, control } = UseCreateNewPassword(onSubmit)

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Create new password
      </Typography>
      <form onSubmit={handleSubmit}>
        <ControlledTextField
          label={'Password'}
          name={'password'}
          type={'password'}
          control={control}
          className={s.textField}
        />
        <div>
          <Typography variant="body_2" color={'form'} className={s.description}>
            Create new password and we will send you further instructions to email
          </Typography>
        </div>
        <Button fullWidth type={'submit'} className={s.newPasswordButton}>
          Create new password
        </Button>
      </form>
    </Card>
  )
}