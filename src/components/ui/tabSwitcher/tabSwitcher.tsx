import { TabsTrigger } from '@radix-ui/react-tabs'
import * as Tabs from '@radix-ui/react-tabs'

import { Typography } from '../typography'

import s from './tabSwitcher.module.scss'

type TabsType = {
  value: string
  title: string
  disabled: boolean
}

type TabSwitcherProps = {
  tabs: TabsType[]
  label: string
  defaultValue: string
  onValueChange: () => void
  ariaLabel: string
}

export const TabSwitcher = (props: TabSwitcherProps) => {
  const { tabs, label, defaultValue, onValueChange, ariaLabel } = props

  return (
    <>
      <Typography variant={'body_2'} className={s.label}>
        {label}
      </Typography>
      <Tabs.Root className={s.root} defaultValue={defaultValue} onValueChange={onValueChange}>
        <Tabs.List className={s.list} aria-label={ariaLabel}>
          {tabs.map(el => (
            <TabsTrigger
              key={el.value}
              className={s.tabsTrigger}
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
    </>
  )
}