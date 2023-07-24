import * as AvatarRadix from '@radix-ui/react-avatar'

import { ReactNode } from 'react'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

export type UserAvatarProps = {
  src?: string
  name: string
  avatarContent?: ReactNode
  width?: number
  height?: number
  className?: string
}

export const UserAvatar = (props: UserAvatarProps) => {
  const { name, src, avatarContent, width, height, className } = props

  const classNames = {
    avatarRoot: clsx(s.avatarRoot, className),
    avatar: s.avatar,
    icon: s.icon,
    fallback: s.fallback,
  }

  return (
    <AvatarRadix.Root className={classNames.avatarRoot} style={{ width, height }}>
      <AvatarRadix.Image className={classNames.avatar} src={src} alt={name} />
      {avatarContent && <div className={classNames.icon}>{avatarContent}</div>}
      <AvatarRadix.Fallback className={classNames.fallback}>{name[0]}</AvatarRadix.Fallback>
    </AvatarRadix.Root>
  )
}
