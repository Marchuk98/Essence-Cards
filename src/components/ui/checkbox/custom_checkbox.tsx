import { CheckMark } from '../../../images/svg/icons'

import { Typography } from '../typography'

import * as Checkbox from '@radix-ui/react-checkbox'

import s from './custom_checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  label?: string
  onChange?: (checked: boolean) => void
  errorMessage?: string
}

export const CustomCheckbox = (props: CheckboxProps) => {
  const { checked, label, onChange, errorMessage } = props

  return (
    <>
      <Checkbox.Root className={s.checkbox} checked={checked} onCheckedChange={onChange}>
        <Checkbox.Indicator className={s.indicator}>
          <CheckMark />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <Typography variant={'body_2'} className={s.label}>
        {label}
      </Typography>
      {errorMessage && (
        <Typography variant={'error'} className={s.error}>
          {errorMessage}
        </Typography>
      )}
    </>
  )
}