import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { UserAvatar } from '../avatar'

import s from './dropdown_menu.module.scss'

export const CustomDropdownMenu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={s.IconButton} aria-label="Customise options">
          <UserAvatar />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={s.DropdownMenuContent}
          sideOffset={5}
          align={'end'}
          alignOffset={5}
        >
          <DropdownMenu.Item className={s.DropdownMenuItem}>Profile</DropdownMenu.Item>
          <DropdownMenu.Item className={s.DropdownMenuItem}>Pack</DropdownMenu.Item>
          <DropdownMenu.Item className={s.DropdownMenuItem} disabled>
            Logout
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
