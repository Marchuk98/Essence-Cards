import { Root } from '@radix-ui/react-radio-group'

import { clsx } from 'clsx'

import { RadioButton } from './radio-button'

import s from './radio-group.module.scss'

type RadioGroupPropsType = {
  value: string
  label?: string
  disabled?: boolean
}

type RadioGroupProps = {
  options?: RadioGroupPropsType[]
  value?: string
  className?: string
  defaultValue?: string
  disabled?: boolean
  onChange?: (value: string) => void
}

export const RadioGroup = (props: RadioGroupProps) => {
  const { options, disabled, className, value, defaultValue, onChange } = props

  const classNames = {
    root: clsx(s.RadioGroupRoot, className),
  }

  return (
    <div>
      <Root
        value={value}
        className={classNames.root}
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onChange}
      >
        {options?.map(el => (
          <RadioButton
            key={el.value}
            value={el.value}
            disabled={el.disabled}
            label={el.label}
          />
        ))}
      </Root>
    </div>
  )
}