import { CustomDropdownMenu, DropdownItem, DropdownItemWithIcon } from '../dropdown-menu'

import { UserAvatar } from '../avatar'
import { Typography } from '../typography'
import { Button } from '../button'
import { LogoCardProject, Logout, Person } from '../../../images/svg/icons'

import s from './header.module.scss'

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
  // TODO:  в процессе разработки логики доработка avatar, onProfileSelect, onSignOut
  const { isAuth, name, email, avatar, onProfileSelect, onSignIn, onSignOut } = props

  return (
    <header className={s.header}>
      <LogoCardProject />
      {/*<Link to={'/'} className={s.logoLink}>*/}
      {/*    */}
      {/*</Link>*/}
      {isAuth ? (
        <CustomDropdownMenu
          trigger={
            <button className={s.userMenuTrigger}>
              <Typography className={s.userName} variant={'body_2'} as={'label'}>
                {name}
              </Typography>
              <UserAvatar name={'header Name'} src={avatar} width={36} height={36} />
            </button>
          }
        >
          <DropdownItem>
            <div className={s.userInfoContainer}>
              <UserAvatar name={'dropdown Name'} src={avatar} width={36} height={36} />
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
