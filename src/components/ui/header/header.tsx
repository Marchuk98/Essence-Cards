import { useState } from 'react'

import { LogoCardProject, Logout } from '../../../images/svg/icons'

import { CustomDropdownMenu, DropdownItemWithIcon } from '../account-menu'
import { Button } from '../button'

import s from './header.module.scss'
import { UserAvatar } from '../avatar'
import { ProfileIcon } from '../../../images/svg/icons/ProfileSvg.tsx'

// export type HeaderProps = {
//   children?: ReactNode
// }

export const Header = () => {
  // const { children } = props
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onClickHandler = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <header className={s.wrapper}>
      <div className={s.container}>
        <>
          <LogoCardProject />
        </>
        {isLoggedIn ? (
          <CustomDropdownMenu
            trigger={
              <button className={s.IconButton} aria-label="Customise options">
                <UserAvatar/>
              </button>
            }
          >
            <DropdownItemWithIcon icon={<ProfileIcon />} text="My Profile" />
            <DropdownItemWithIcon icon={''} text="Pack" />
            <DropdownItemWithIcon icon={<Logout />} text="Logout" />
          </CustomDropdownMenu>
        ) : (
          <Button variant={'primary'} onClick={onClickHandler}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
}
