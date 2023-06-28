import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import { Typography } from '../typography'

import s from './custom_checkbox.module.scss'

export type CheckboxProps = {
  description?: string
  checked: boolean
}

export const CustomCheckbox = (props: CheckboxProps) => {
  const { description, checked } = props

  return (
    <>
      <form>
        <div className={s.checkBox__block}>
          <Checkbox.Root
            className={`${s.checkbox}${checked ? ` ${s.checked}` : ''}`}
            checked={checked}
          >
            <Checkbox.Indicator>
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label className={s.label} htmlFor="c1">
            <Typography variant={'body_2'}>{description}</Typography>
          </label>
        </div>
      </form>
    </>
  )
}
