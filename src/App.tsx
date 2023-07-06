import { Link } from 'react-router-dom'

import { Button } from './components/ui/button'
import { CustomCheckbox } from './components/ui/checkbox/custom_checkbox.tsx'
import { Header } from './components/ui/header'
import { TextField } from './components/ui/text-field'
import { Eye } from './images/svg/icons/EyeSvg.tsx'
import { Search } from './images/svg/icons/SearchSvg.tsx'
import { CustomDropdownMenu, DropdownItemWithIcon } from './components/ui/dropdown-menu'
import { More } from './images/svg/icons/MoreSvg'

export function App() {
  const userInfo = {
    name: 'Alexey',
    avatar: '',
    email: 'Gaba00275@yandex.ru',
  }

  return (
    <div>
      <Button as={Link} to={'/home'}>
        Go home
      </Button>
      <CustomCheckbox />
      <Header isAuth={true} userInfo={userInfo} />
      <TextField variant={'password'} placeholder={'please type password'}>
        <Eye />
      </TextField>

      <TextField variant={'search'} placeholder={'please type text'}>
        <Search />
      </TextField>

      <CustomDropdownMenu
        trigger={
          <button
            style={{ background: 'transparent', border: 'none' }}
            aria-label="Customise options"
          >
            <More />
          </button>
        }
      >
        <DropdownItemWithIcon icon={''} text="add" />
        <DropdownItemWithIcon icon={''} text="edit" />
        <DropdownItemWithIcon icon={''} text="delete" />
      </CustomDropdownMenu>
    </div>
  )
}
