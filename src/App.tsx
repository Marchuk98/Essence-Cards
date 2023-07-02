import { Link } from 'react-router-dom'

import { Button } from './components/ui/button'
import { CustomCheckbox } from './components/ui/checkbox/custom_checkbox.tsx'
import { Header } from './components/ui/header'
import { TextField } from './components/ui/text-field'
import { Eye } from './images/svg/icons/EyeSvg.tsx'
import { Search } from './images/svg/icons/SearchSvg.tsx'

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
    </div>
  )
}
