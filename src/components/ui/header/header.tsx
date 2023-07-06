import { LogoCardProject, Logout } from '../../../images/svg/icons'

import { CustomDropdownMenu, DropdownItem, DropdownItemWithIcon } from '../dropdown-menu'

import s from './header.module.scss'
import { UserAvatar } from '../avatar'
import { ProfileIcon } from '../../../images/svg/icons/ProfileSvg.tsx'
import { Typography } from '../typography'
import { Link } from 'react-router-dom'
import { Button } from '../button'

type HeaderProps = {
  isAuth: boolean
  userInfo?: {
    name: string
    avatar: string
    email: string
  }
  onProfileSelect?: () => void
  onSignOut?: () => void
}

export const Header = (props: HeaderProps) => {
  // TODO:  в процессе разработки логики доработка avatar, onProfileSelect, onSignOut
  const { isAuth, userInfo, onProfileSelect, onSignOut } = props

  return (
    <header className={s.header}>
      <Link to={'/'} className={s.logoLink}>
        <LogoCardProject />
      </Link>
      <Typography className={s.userName} variant={'body_2'} as={'label'}>
        {userInfo?.name}
      </Typography>
      {isAuth && (
        <CustomDropdownMenu
          trigger={
            <button className={s.userMenuTrigger}>
              <UserAvatar />
            </button>
          }
        >
          <DropdownItem>
            <div className={s.userInfoContainer}>
              <UserAvatar />
              <div className={s.userDetails}>
                <Typography variant="body_2">{userInfo?.name}</Typography>
                <Typography variant="caption" className={s.userEmail}>
                  {userInfo?.email}
                </Typography>
              </div>
            </div>
          </DropdownItem>

          <DropdownItemWithIcon icon={<ProfileIcon />} text="Profile" onSelect={onProfileSelect} />
          <DropdownItemWithIcon icon={<Logout />} text="Sign out" onSelect={onSignOut} />
        </CustomDropdownMenu>
      )}
      {!isAuth && <Button variant="primary">Sign In</Button>}
    </header>
  )
}
