import { Button, Card, Typography } from '../../ui'

import { MailIcon } from '../../../images/svg/icons'

import s from './check-email-form.module.scss'
import { PATH } from '../../../common'

export type CheckEmailFormProps = {
  email: string
}

export const CheckEmailForm = (props: CheckEmailFormProps) => {
  const { email } = props

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Check Email
      </Typography>
      <MailIcon className={s.icon} />
      <Typography variant="body_2" color={'form'} className={s.description}>
        We’ve sent an Email with instructions to {email ? email : 'example@mail.com'}
      </Typography>

      <Button as={'a'} fullWidth variant={'primary'} className={s.button} href={PATH.LOGIN}>
        Back to Sign In
      </Button>
    </Card>
  )
}
