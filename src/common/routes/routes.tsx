import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../../components/layout'
import { ProtectedRoutes } from './protected-routes'
import { PATH } from '../constants'
import { Login } from '../../services/auth/components/login/login.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            // path: '/',
            // element: <Decks />,
          },
        ],
      },
      {
        path: PATH.LOGIN,
        element: <Login />,
      },
    ],
  },
])