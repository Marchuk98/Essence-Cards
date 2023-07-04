import { ComponentPropsWithoutRef, CSSProperties, ReactNode, useState } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import { AnimatePresence, motion, MotionProps, Variants } from 'framer-motion'

import { Typography } from '../typography'

import clsx from 'clsx'

import s from './dropdown_menu.module.scss'
import { More } from '../../../images/svg/icons/MoreSvg.tsx'

type CustomDropdownMenuProps = {
  trigger?: ReactNode
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

const menu = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
} satisfies Variants

const item = {
  variants: {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 },
  },
  transition: { opacity: { duration: 0.2 } },
} satisfies MotionProps

export const CustomDropdownMenu = (props: CustomDropdownMenuProps) => {
  const { trigger, className, children, style } = props
  const [open, setOpen] = useState(false)

  const classNames = {
    button: s.button,
    content: clsx(s.content, className),
    arrowBox: s.arrowBox,
    arrow: s.arrow,
    itemsBox: s.itemsBox,
  }

  return (
    <DropdownMenuRadix.Root open={open} onOpenChange={setOpen}>
      <DropdownMenuRadix.Trigger asChild>
        {trigger ?? (
          <button className={classNames.button}>
            <More />
          </button>
        )}
      </DropdownMenuRadix.Trigger>
      <AnimatePresence>
        {open && (
          <DropdownMenuRadix.Portal forceMount>
            <DropdownMenuRadix.Content
              className={className}
              forceMount
              style={style}
              sideOffset={5}
              align={'end'}
              alignOffset={5}
            >
              <motion.div
                animate={open ? 'open' : 'closed'}
                initial="closed"
                exit="closed"
                variants={menu}
              >
                <DropdownMenuRadix.Arrow className={classNames.arrowBox} asChild>
                  <div className={classNames.arrow} />
                </DropdownMenuRadix.Arrow>
                <div className={classNames.itemsBox}>{children}</div>
              </motion.div>
            </DropdownMenuRadix.Content>
          </DropdownMenuRadix.Portal>
        )}
      </AnimatePresence>
    </DropdownMenuRadix.Root>
  )
}

export type DropdownItemProps = {
  children?: ReactNode
  disabled?: boolean
  onSelect?: (e: Event) => void
  className?: string
  style?: CSSProperties
}

export const DropdownItem = (props: DropdownItemProps) => {
  const { children, disabled, onSelect, className, style } = props
  const classNames = {
    item: clsx(s.item, className),
  }

  return (
    <DropdownMenuRadix.Item
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      style={style}
      asChild
    >
      <motion.div {...item}>{children}</motion.div>
    </DropdownMenuRadix.Item>
  )
}

export type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'div'>

export const DropdownItemWithIcon = (props: DropdownItemWithIconProps) => {
  const { icon, text, disabled, onSelect, className, style, ...rest } = props
  const classNames = {
    item: clsx(s.item, className),
    itemIcon: s.itemIcon,
  }

  return (
    <DropdownMenuRadix.Item
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      onClick={event => event.stopPropagation()}
      style={style}
      asChild
      {...rest}
    >
      <motion.div {...item}>
        <div className={classNames.itemIcon}>{icon}</div>
        <Typography variant={'caption'}>{text}</Typography>
      </motion.div>
    </DropdownMenuRadix.Item>
  )
}
