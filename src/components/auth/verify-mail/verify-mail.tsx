import { useParams } from 'react-router-dom'
import { useVerifyMailMutation } from '../../../services'
import { useEffect } from 'react'
import { PATH } from '../../../common'
import { Button, Card, Typography } from '../../ui'
import { VerifyEmail } from '../../../assets/icons/VerifyEmail.tsx'

import s from './verify-mail.module.scss'

export const VerifyMail = () => {
  const { code } = useParams()

  const [verifyMail] = useVerifyMailMutation()

  useEffect(() => {
    if (code) {
      verifyMail({ code })
    }
  }, [code])

  return (
    <div className={s.container}>
      <Card className={s.card}>
        <Typography variant={'large'} as={'h1'}>
          Email confirmed
        </Typography>
        <VerifyEmail className={s.icon} />
        <Typography variant={'body_2'} color={'form'} className={s.description}>
          Thank you for confirming your email address
        </Typography>

        <Button as={'a'} fullWidth variant={'primary'} className={s.button} href={PATH.LOGIN}>
          Back to Sign In
        </Button>
      </Card>
    </div>
  )
}