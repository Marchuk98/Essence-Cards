import * as AvatarRadix from '@radix-ui/react-avatar'
import { ComponentProps, CSSProperties } from 'react'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

export type UserAvatarProps = {
  src?: ComponentProps<'img'>['src']
  name: string
  size?: CSSProperties['width']
  className?: string
}

export const UserAvatar = (props: UserAvatarProps) => {
  const { name, src, size, className } = props

  const fallbackText = name?.slice(0, 2).toUpperCase()
  const avatarSize = { width: size, height: size }
  const classNames = {
    avatarRoot: clsx(s.avatarRoot, className),
    avatar: s.avatar,
    icon: s.icon,
    fallback: s.fallback,
  }

  return (
    <AvatarRadix.Root className={classNames.avatarRoot} tabIndex={0}>
      <AvatarRadix.Image
        className={classNames.avatar}
        src={src}
        alt={'user avatar'}
        style={avatarSize}
      />
      <AvatarRadix.Fallback style={avatarSize} className={classNames.fallback}>
        {fallbackText}
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
  )
}
