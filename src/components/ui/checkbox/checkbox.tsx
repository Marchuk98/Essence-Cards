import * as CheckboxRDX from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import { clsx } from 'clsx'

import { Typography } from '../typography'

import { CheckMark } from '../../../images/svg/icons'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  label?: string
  onChange?: (checked: boolean) => void
  errorMessage?: string
  className?: string
  required?: boolean
  disabled?: boolean
  id?: string
  position?: 'left'
}

export const Checkbox = (props: CheckboxProps) => {
  const { checked, label, onChange, required, disabled, id, errorMessage, className } = props

  const classNames = {
    container: clsx(s.container, className),
    buttonWrapper: clsx(s.buttonWrapper),
    root: s.root,
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    error: s.error,
  }

  return (
    <>
      <div className={classNames.container}>
        <LabelRadix.Root asChild>
          <Typography className={s.wrap} as={'label'} variant="body_2">
            <div className={classNames.buttonWrapper}>
              <CheckboxRDX.Root
                className={classNames.root}
                checked={checked}
                onCheckedChange={onChange}
                disabled={disabled}
                required={required}
                id={id}
              >
                {checked && (
                  <CheckboxRDX.Indicator className={classNames.indicator} forceMount>
                    <CheckMark />
                  </CheckboxRDX.Indicator>
                )}
              </CheckboxRDX.Root>
            </div>
            {label}
          </Typography>
        </LabelRadix.Root>
      </div>
      {errorMessage && (
        <Typography variant="body_2" className={classNames.error}>
          {errorMessage}
        </Typography>
      )}
    </>
  )
}
