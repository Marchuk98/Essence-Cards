import { FC } from 'react'

import * as Select from '@radix-ui/react-select'

import { Typography } from '../typography'

import s from './select.module.scss'

type SelectItemPropsType = {
  className?: string
  value: string
}

export const SelectItem: FC<SelectItemPropsType> = ({ value, ...props }) => {
  return (
    <Select.Item className={s.item} value={value} {...props}>
      <Select.ItemText>
        <Typography variant={'body_1'}>{value}</Typography>
      </Select.ItemText>
    </Select.Item>
  )
}
