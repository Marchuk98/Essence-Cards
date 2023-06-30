import { useState } from 'react'

import { LogoCardProject } from '../../../images/svg/icons'

import { CustomDropdownMenu } from '../account-menu'
import { Button } from '../button'

import s from './header.module.scss'

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
        <div>
          <LogoCardProject />
        </div>
        {isLoggedIn ? (
          <CustomDropdownMenu />
        ) : (
          <Button variant={'primary'} onClick={onClickHandler}>
            Sign In
          </Button>
        )}
      </div>
    </header>

    // <header className={s.wrapper}>
    //   <div className={s.container}>{children}</div>
    // </header>
  )
}
