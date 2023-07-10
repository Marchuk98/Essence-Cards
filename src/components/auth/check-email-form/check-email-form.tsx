import { Button, Card, Typography } from '../../ui'

import s from './check-email-form.module.scss'
import MailIcon from '../../../images/svg/icons/mail-icon.tsx'

export type CheckEmailFormProps = {
  email: string
  linkPath?: string
}

export const CheckEmailForm = (props: CheckEmailFormProps) => {
  const { email, linkPath } = props

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Check Email
      </Typography>
      <MailIcon className={s.icon} />
      <Typography variant="body_2" color={'form'} className={s.description}>
        We’ve sent an Email with instructions to {email ? email : 'example@mail.com'}
      </Typography>
      <Button as={'a'} fullWidth={true} className={s.link} href={linkPath}>
        Back to Sign In
      </Button>
    </Card>
  )
}
