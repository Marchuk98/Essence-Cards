import s from './page-not-found.module.scss'

import { Typography } from '../typography'
import { Button } from '../button'
import { useNavigate } from 'react-router-dom'
import { Page404 } from '../../../assets/icons'

export const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <div className={s.container}>
      <Page404 />
      <div className={s.wrapper}>
        <Typography variant={'body_1'} className={s.message}>
          Sorry! Page not found!
        </Typography>
        <Button variant={'primary'} className={s.btn} onClick={() => navigate('/')}>
          Back to home page
        </Button>
      </div>
    </div>
  )
}