import { createBrowserRouter } from 'react-router-dom'
import { PATH } from '../constants'
import { Packs } from '../../services/packs/components/packs/packs.tsx'
import { Login } from '../../services'
import { ProtectedRoutes } from './protected-routes.tsx'
import { App } from '../../app/App.tsx'
import { Register } from '../../services'
import { PasswordRecovery } from '../../services'
import { CheckEmail } from '../../services'
import { NewPassword } from '../../services'
import { Profile } from '../../services'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: PATH.PACKS,
            element: <Packs />,
          },
          {
            path: PATH.PROFILE,
            element: <Profile />,
          },
        ],
      },
      {
        path: PATH.LOGIN,
        element: <Login />,
      },
      {
        path: PATH.REGISTRATION,
        element: <Register />,
      },
      {
        path: PATH.PASSWORD_RECOVERY,
        element: <PasswordRecovery />,
      },
      {
        path: PATH.CHECK_EMAIL,
        element: <CheckEmail />,
      },
      {
        path: PATH.NEW_PASSWORD,
        element: <NewPassword />,
      },
    ],
  },
])


