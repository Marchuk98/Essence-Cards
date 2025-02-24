import * as Radio from '@radix-ui/react-radio-group'

import { clsx } from 'clsx'
import { Typography } from '../typography'

import s from './radio-group.module.scss'

type Option = {
  value: string
  label?: string
}

type RadioGroupProps = {
  options?: Option[]
  value?: string
  className?: string
  disabled?: boolean
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export const RadioGroup = (props: RadioGroupProps) => {
  const { options, className, disabled, ...rest } = props

  const classNames = {
    root: clsx(s.RadioGroupRoot, className),
    item: clsx(s.RadioGroupItem),
    indicator: clsx(s.RadioGroupIndicator),
    label: clsx(s.label),
  }

  return (
    <Radio.Root {...rest} className={classNames.root} disabled={disabled}>
      {options?.map(el => (
        <Radio.Item className={classNames.item} key={el.value} value={el.value} disabled={disabled}>
          <div className={classNames.indicator} />
          <Typography variant={'body_2'} as={'label'} className={classNames.label}>
            {el.label}
          </Typography>
        </Radio.Item>
      ))}
    </Radio.Root>
  )
}
