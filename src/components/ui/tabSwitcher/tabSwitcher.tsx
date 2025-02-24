import { TabsTrigger } from '@radix-ui/react-tabs'
import * as Tabs from '@radix-ui/react-tabs'

import { Typography } from '../typography'
import { clsx } from 'clsx'

import s from './tabSwitcher.module.scss'

type TabsType = {
  value: string
  title: string
  disabled?: boolean
}

type TabSwitcherProps = {
  tabs: TabsType[]
  label: string
  className?: string
  defaultValue: string
  onValueChange: (value: string) => void
  disabled?: boolean
}

export const TabSwitcher = (props: TabSwitcherProps) => {
  const { tabs, label, defaultValue, disabled, className, onValueChange } = props

  const classNames = {
    root: clsx(s.root, className),
    list: clsx(s.list, disabled && s.disabled),
    trigger: clsx(s.tabsTrigger, disabled && s.disabled),
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <div className={s.container}>
      {label && (
        <Typography variant={'body_1'} className={classNames.label}>
          {label}
        </Typography>
      )}
      <Tabs.Root
        className={classNames.root}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
      >
        <Tabs.List className={classNames.list} aria-label={label}>
          {tabs.map(el => (
            <TabsTrigger
              key={el.value}
              className={classNames.trigger}
              disabled={el.disabled}
              value={el.value}
            >
              <Typography variant={'body_1'} as={'label'} className={s.tabsTriggerText}>
                {el.title}
              </Typography>
            </TabsTrigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}
