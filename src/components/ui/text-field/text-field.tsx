import { ComponentPropsWithoutRef, forwardRef, KeyboardEvent, ReactNode, useState } from 'react'

import clsx from 'clsx'

import { Close, Eye, EyeOff, Search } from '../../../assets/icons'
import { Typography } from '../typography'

import s from './text-field.module.scss'

export type TextFieldProps = {
  value?: string
  label?: string
  errorMessage?: string
  iconStart?: ReactNode
  iconEnd?: ReactNode
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onClearValue?: () => void
  className?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      disabled,
      value,
      type,
      label,
      errorMessage,
      iconStart,
      iconEnd,
      onEnter,
      onKeyDown,
      onClearValue,
      className,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const showError = errorMessage && errorMessage.length > 0

    if (type === 'search') {
      iconStart = <Search />
    }
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (onEnter && e.key === 'Enter') {
        onEnter(e)
      }
      onKeyDown?.(e)
    }

    const classNames = {
      root: clsx(s.root, className),
      field: clsx(s.field, showError && s.error),
      iconButton: clsx(s.iconButton, disabled && s.disabled),
      iconStart: clsx(s.iconStart),
      label: clsx(s.label),
    }

    const showClearValueIcon = !iconEnd && !showError && onClearValue && value?.length! > 0
    const dataIconStart = iconStart ? 'start' : ''
    const dataIconEnd = iconEnd || showClearValueIcon ? 'end' : ''
    const dataIcon = dataIconStart + dataIconEnd
    const onClickShowValue = () => {
      if (!disabled) {
        setShowPassword(!showPassword)
      }
    }

    return (
      <div className={classNames.root}>
        {label && (
          <Typography variant={'body_2'} as={'label'} className={classNames.label}>
            {label}
          </Typography>
        )}
        <div className={s.fieldContainer}>
          {iconStart && <span className={s.iconStart}>{iconStart}</span>}
          <input
            value={value}
            disabled={disabled}
            data-icon={dataIcon}
            ref={ref}
            className={classNames.field}
            type={showPassword ? 'text' : type}
            onKeyDown={handleKeyDown}
            {...rest}
          />

          {type === 'password' && (
            <button className={classNames.iconButton} type="button" onClick={onClickShowValue}>
              {!showPassword ? <Eye /> : <EyeOff />}
            </button>
          )}

          {showClearValueIcon && (
            <button className={classNames.iconButton} onClick={onClearValue} type="button">
              {<Close />}
            </button>
          )}

          {iconEnd && <span className={s.iconEnd}>{iconEnd}</span>}
        </div>
        {showError && (
          <Typography variant={'error'} color={'error'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)
