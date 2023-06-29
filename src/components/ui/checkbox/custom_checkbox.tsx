import { CheckMark } from '../../../images/svg/icons'

import { Typography } from '../typography'

import * as Checkbox from '@radix-ui/react-checkbox'

import s from './custom_checkbox.module.scss'

export type CheckboxProps = {
  description?: string
  checked?: boolean
}

export const CustomCheckbox = (props: CheckboxProps) => {
  const { description, checked } = props

  return (
    <>
      <Checkbox.Root className={s.checkbox} checked={checked}>
        <Checkbox.Indicator className={s.indicator}>
          <CheckMark />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={s.label} htmlFor="c1">
        <Typography variant={'body_2'}>{description}</Typography>
      </label>
    </>
  )
}