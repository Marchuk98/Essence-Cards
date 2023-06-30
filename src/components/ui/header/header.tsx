import { ReactNode } from 'react'

import s from './header.module.scss'

export type HeaderProps = {
  children: ReactNode
}

export const Header = (props: HeaderProps) => {
  const { children } = props

  return (
    <header className={s.wrapper}>
      <div className={s.container}>{children}</div>
    </header>
  )
}
