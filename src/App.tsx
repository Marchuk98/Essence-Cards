import { Link } from 'react-router-dom'

import { Button } from './components/ui/button'
import { CustomCheckbox } from './components/ui/checkbox/custom_checkbox.tsx'

export function App() {
  return (
    <div>
      <Button as={Link} to={'/home'}>
        Go home
      </Button>
      <CustomCheckbox />
    </div>
  )
}
