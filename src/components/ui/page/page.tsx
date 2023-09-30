import { PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import s from './page.module.scss'

type PageProps = PropsWithChildren<{
  mt?: string | number
  flex?: boolean
  flexTb?: boolean
}>

export const Page = ({ children, mt = '36px', flex = false, flexTb = false }: PageProps) => {
  const classNames = clsx(s.content, {
    [s.flex]: flex,
    [s.flexTb]: flexTb,
  })

  return (
    <div className={classNames} style={{ marginTop: mt }}>
      {children}
    </div>
  )
}
