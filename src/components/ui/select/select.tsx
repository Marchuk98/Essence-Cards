import * as SelectCSE from '@radix-ui/react-select'
import { Label } from '@radix-ui/react-label'
import { CSSProperties } from 'react'
import { Typography } from '../typography'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { SelectItem } from './select-item'
import { clsx } from 'clsx'

import s from './select.module.scss'

export type SelectProps = {
  items: string[]
  label?: string
  placeholder?: string
  onChange?: (value: string) => void
  className?: string
  width?: CSSProperties['width']
  disabled?: boolean
  value?: string | number
  errorMessage?: string
  fullWidth?: boolean
}

export const Select = (props: SelectProps) => {
  const {
    label,
    onChange,
    items,
    errorMessage,
    className,
    value,
    disabled,
    placeholder = items[0],
    width,
    fullWidth,
  } = props

  const classNames = {
    root: clsx(s.root, fullWidth && s.fullWidth),
    trigger: clsx(s.trigger, className),
    icon: clsx(s.icon),
    content: clsx(s.content),
    item: clsx(s.item, className),
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <div className={classNames.root} style={{ width: width }}>
      <Label className={classNames.label}>
        {label && <Typography variant={'body_2'}>{label}</Typography>}
        <SelectCSE.Root value={value?.toString()} disabled={disabled} onValueChange={onChange}>
          <SelectCSE.Trigger className={classNames.trigger} style={{ width: width }}>
            <SelectCSE.Value placeholder={placeholder}>{value}</SelectCSE.Value>
            <SelectCSE.Icon
              className={classNames.icon}
              data-state={disabled ? 'disabled' : 'not-disabled'}
            >
              <ChevronDownIcon />
            </SelectCSE.Icon>
          </SelectCSE.Trigger>
          <SelectCSE.Portal>
            <SelectCSE.Content
              className={classNames.content}
              position={'popper'}
              side={'bottom'}
              sideOffset={0}
            >
              <SelectCSE.Viewport>
                {items.map((el, i) => {
                  return <SelectItem key={i} value={el} className={classNames.item} />
                })}
              </SelectCSE.Viewport>
            </SelectCSE.Content>
          </SelectCSE.Portal>
        </SelectCSE.Root>
        {errorMessage && (
          <Typography variant={'error'} color={'error'}>
            {errorMessage}
          </Typography>
        )}
      </Label>
    </div>
  )
}
