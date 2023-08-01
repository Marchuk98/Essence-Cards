import { PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import s from './page.module.scss'

type PageProps = PropsWithChildren<{
  mt?: string | number
  flex?: boolean
}>

export const Page = ({ children, mt = '36px', flex = false }: PageProps) => {
  const classNames = {
    content: clsx(s.content, flex && s.flex),
  }

  return (
    <div className={classNames.content} style={{ marginTop: mt }}>
      {children}
    </div>
  )
}
