import * as RadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import { Typography } from '../../typography'

import s from './radio-button.module.scss'

type RadioButtonsProps = {
  value: string
  label?: string
  disabled?: boolean
}

export const RadioButton = (props: RadioButtonsProps) => {
  const { value, label, disabled } = props

  const classNames = {
    container: clsx(s.RadioButtonContainer, disabled && s.disabled),
    item: clsx(s.RadioGroupItem),
    indicator: clsx(s.RadioGroupIndicator),
    label: clsx(s.label),
  }

  return (
    <div className={classNames.container}>
      <RadioGroup.Item disabled={disabled} className={classNames.item} value={value} id={value}>
        <RadioGroup.Indicator className={classNames.indicator} />
      </RadioGroup.Item>
      {label && (
        <Typography as={'label'} variant={'body_2'} className={classNames.label} htmlFor={value}>
          {label}
        </Typography>
      )}
    </div>
  )
}
