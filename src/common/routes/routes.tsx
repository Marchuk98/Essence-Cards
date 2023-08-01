import { createBrowserRouter } from 'react-router-dom'
import { PATH } from '../constants'
import { Packs } from '../../services/packs/components/packs/packs.tsx'
import { Login } from '../../services/auth/components/login/login.tsx'
import { ProtectedRoutes } from './protected-routes.tsx'
import { App } from '../../app/App.tsx'
import { Register } from '../../services/auth/components/register/register.tsx'
import { PasswordRecovery } from '../../services/auth/components/password-recovery/password-recovery.tsx'
import { CheckEmail } from '../../services/auth/components/check-email/check-email.tsx'
import { NewPassword } from '../../services/auth/components/new-password/new-password.tsx'
import { Profile } from '../../services/profile/components/profile/profile.tsx'

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


