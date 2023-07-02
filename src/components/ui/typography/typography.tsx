import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

export type TypographyPropsType<T extends ElementType = 'p'> = {
  as?: T
  variant:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body_1'
    | 'body_2'
    | 'subtitle_1'
    | 'subtitle_2'
    | 'caption'
    | 'overline'
    | 'link_1'
    | 'link_2'
    | 'error'
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'p'>
export const Typography = <T extends ElementType = 'p'>(
  props: TypographyPropsType<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyPropsType<T>>
) => {
  const { children, variant, className, as: Component = 'p', ...rest } = props

  return (
    <Component className={`${s[variant]} ${className ?? ''}`} {...rest}>
      {children}
    </Component>
  )
}
