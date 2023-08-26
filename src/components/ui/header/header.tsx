import { CustomDropdownMenu, DropdownItem, DropdownItemWithIcon } from '../dropdown-menu'

import { UserAvatar } from '../avatar'
import { Typography } from '../typography'
import { Button } from '../button'
import { LogoCardProject, Logout, Person } from '../../../images/svg/icons'

import s from './header.module.scss'
import { Link } from 'react-router-dom'
import { PATH } from '../../../common'

type HeaderProps = {
  isAuth: boolean
  name?: string
  avatar?: string
  email?: string
  onSignIn?: () => void
  onProfileSelect?: () => void
  onSignOut?: () => void
}

export const Header = (props: HeaderProps) => {
  const { isAuth, name, email, avatar, onProfileSelect, onSignIn, onSignOut } = props

  return (
    <header className={s.header}>
      <Link to={PATH.PACKS} className={s.logoLink}>
        <LogoCardProject />
      </Link>
      {isAuth ? (
        <CustomDropdownMenu
          trigger={
            <button className={s.userMenuTrigger}>
              <Typography className={s.userName} variant={'body_2'} as={'label'}>
                {name}
              </Typography>
              <UserAvatar name={'header Name'} src={avatar} size={'2.5rem'} />
            </button>
          }
        >
          <DropdownItem>
            <div className={s.userInfoContainer}>
              <UserAvatar name={'dropdown Name'} src={avatar} size={'2.25rem'} />
              <div className={s.userDetails}>
                <Typography variant="body_2">{name}</Typography>
                <Typography variant="caption" className={s.userEmail}>
                  {email}
                </Typography>
              </div>
            </div>
          </DropdownItem>

          <DropdownItemWithIcon icon={<Person />} text="Profile" onSelect={onProfileSelect} />
          <DropdownItemWithIcon icon={<Logout />} text="Sign out" onSelect={onSignOut} />
        </CustomDropdownMenu>
      ) : (
        <Button onClick={onSignIn} variant={'primary'}>
          <Typography variant={'subtitle_2'}>Sign In</Typography>
        </Button>
      )}
    </header>
  )
}
