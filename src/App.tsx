import { Link } from 'react-router-dom'

import { Button } from './components/ui/button'
import { CustomCheckbox } from './components/ui/checkbox/custom_checkbox.tsx'
import { Header } from './components/ui/header'
import { CustomDropdownMenu } from './components/ui/account-menu/dropdown_menu.tsx'

export function App() {
  return (
    <div>
      <Button as={Link} to={'/home'}>
        Go home
      </Button>
      <CustomCheckbox />
      <Header children={'sdfsdf'} />
      <CustomDropdownMenu />
    </div>
  )
}
