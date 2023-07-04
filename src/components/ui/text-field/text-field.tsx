import { ComponentPropsWithoutRef, ElementType, ReactNode, useState } from 'react'

import clsx from 'clsx'

import { EyeOff } from '../../../images/svg/icons/EyeOffSvg.tsx'
import { Eye } from '../../../images/svg/icons/EyeSvg.tsx'
import { Typography } from '../typography'

import s from './text-field.module.scss'

export type InputPropsType<T extends ElementType = 'input'> = {
  as?: T
  variant?: 'default' | 'password' | 'search'
  className?: string
  children?: ReactNode
  errorMessage?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = <T extends ElementType = 'input'>(
  props: InputPropsType<T> & Omit<ComponentPropsWithoutRef<T>, keyof InputPropsType<T>>
) => {
  const {
    variant = 'default',
    as: Component = 'input',
    className,
    children,
    errorMessage,
    label,
    ...rest
  } = props
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const styles = {
    wrapper: clsx(s.wrapper, { [s.error]: errorMessage }),
    labelField: s.label_field,
    field: clsx(s.field, !!errorMessage && s.error, className),
    icon: s.icon,
    input: clsx(s[variant], { [s.error]: errorMessage }),
    error: clsx(s.error),
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState)
  }

  let type = 'text'

  if (variant === 'password') {
    type = showPassword ? 'text' : 'password'
  } else if (variant === 'search') {
    type = 'search'
  }

  return (
    <>
      {label && (
        <Typography variant={'body_2'} as={'label'}>
          {label}
        </Typography>
      )}
      <div className={styles.wrapper} tabIndex={0}>
        <div className={styles.field}>
          {variant === 'password' && (
            <div className={styles.icon} onClick={togglePasswordVisibility}>
              {showPassword ? <EyeOff /> : <Eye />}
            </div>
          )}

          {variant === 'search' && <div className={styles.icon}>{children}</div>}

          <div style={{ width: '100%' }}>
            <Component className={styles.input} {...rest} type={type} />
          </div>
        </div>
      </div>
      <Typography variant={'error'} className={styles.error}>
        {errorMessage}
      </Typography>
    </>
  )
}
