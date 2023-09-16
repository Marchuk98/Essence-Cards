import { createBrowserRouter } from 'react-router-dom'
import { PATH } from '../constants'
import { Packs } from '../../services/packs/components'
import { Login, Register, PasswordRecovery, CheckEmail, NewPassword, Profile } from '../../services'
import { ProtectedRoutes } from './protected-routes.tsx'
import { App } from '../../app/App.tsx'
import { Learn } from '../../services/learn/components/learn.tsx'
import { Cards } from '../../services/cards/components/cards.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            index: true,
            element: <Packs />,
          },
          {
            path: PATH.PROFILE,
            element: <Profile />,
          },
          {
            path: PATH.CARDS + PATH.ID,
            element: <Cards />,
          },
          {
            path: PATH.LEARN + PATH.ID,
            element: <Learn />,
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


