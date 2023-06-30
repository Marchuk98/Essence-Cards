import { Link } from 'react-router-dom'

import { Button } from './components/ui/button'
import { CustomCheckbox } from './components/ui/checkbox/custom_checkbox.tsx'
import { Header } from './components/ui/header'

export function App() {
  return (
    <div>
      <Button as={Link} to={'/home'}>
        Go home
      </Button>
      <CustomCheckbox />
      <Header />
    </div>
  )
}
