import { ComponentPropsWithoutRef, ReactNode } from 'react'

import s from './card.module.scss'

export type CardProps = {
  className?: string
  children: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Card = (props: CardProps) => {
  const { className, children, ...rest } = props

  return (
    <div className={`${s.card ? s.card : ''} ${className ?? ''} `} {...rest}>
      {children}
    </div>
  )
}
