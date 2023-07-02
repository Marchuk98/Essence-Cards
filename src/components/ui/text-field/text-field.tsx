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
  error?: boolean
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
    error,
    label,
    ...rest
  } = props
  const [err, setErr] = useState(error)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const styles = {
    container: s.container,
    labelField: s.label_field,
    wrapper: clsx(s.wrapper, { [s.error]: error }),
    field: clsx(s.field, { [s._search]: variant === 'search' }),
    icon: s.icon,
    input: clsx(s[variant], { [s.error]: err }),
    error: clsx(s.error, { [s.error]: err }),
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
    <div className={styles.container}>
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
      <span
        onClick={() => setErr(false)}
        style={{ color: 'var(--color-danger-300)' }}
        className={styles.error}
      >
        {err && <Typography variant={'error'}>ERROR!</Typography>}
      </span>
    </div>
  )
}
