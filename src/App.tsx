import { Link } from 'react-router-dom'

import { Button } from './components/ui/button'
import { CustomCheckbox } from './components/ui/checkbox/custom_checkbox.tsx'
import { Header } from './components/ui/header'
import { TextField } from './components/ui/text-field'
import { Eye } from './images/svg/icons/EyeSvg.tsx'
import { Search } from './images/svg/icons/SearchSvg.tsx'
import s from './components/ui/header/header.module.scss'
import { CustomDropdownMenu, DropdownItemWithIcon } from './components/ui/account-menu'
import { ProfileIcon } from './images/svg/icons/ProfileSvg.tsx'
import { More } from './images/svg/icons/MoreSvg.tsx'
import { Logout } from './images/svg/icons'

export function App() {
  return (
    <div>
      <Button as={Link} to={'/home'}>
        Go home
      </Button>
      <CustomCheckbox />
      <Header />
      <TextField variant={'password'} placeholder={'please type password'}>
        <Eye />
      </TextField>

      <TextField variant={'search'} placeholder={'please type text'}>
        <Search />
      </TextField>

      <CustomDropdownMenu
        trigger={
          <button className={s.IconButton} aria-label="Customise options">
            <More />
          </button>
        }
      >
        <DropdownItemWithIcon icon={<ProfileIcon />} text="My Profile" />
        <DropdownItemWithIcon icon={''} text="Pack" />
        <DropdownItemWithIcon icon={<Logout />} text="Logout" />
      </CustomDropdownMenu>
    </div>
  )
}
