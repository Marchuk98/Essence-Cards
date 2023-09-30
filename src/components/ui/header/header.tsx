import { CustomDropdownMenu, DropdownItem, DropdownItemWithIcon } from '../dropdown-menu'
import { UserAvatar } from '../avatar'
import { Typography } from '../typography'
import { Button } from '../button'
import { LogoCardProject, Logout, Person } from '../../../assets/icons'
import { StatusType } from '../../../app/app-slice.ts'
import { LinearProgress } from '../../../assets/loaders'

import s from './header.module.scss'

type HeaderProps = {
  isLoading: StatusType
  isAuth: boolean
  name?: string
  avatar?: string
  email?: string
  onSignIn?: () => void
  onProfileSelect?: () => void
  onSignOut?: () => void
}

export const Header = (props: HeaderProps) => {
  const { isLoading, isAuth, name, email, avatar, onProfileSelect, onSignIn, onSignOut } = props

  return (
    <>
      <header className={s.header}>
        <Typography variant={'link_1'} as={'a'} href={'/'} className={s.logoLink}>
          <LogoCardProject />
        </Typography>
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
      {isLoading === 'loading' ? <LinearProgress /> : ''}
    </>
  )
}
