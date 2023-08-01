import { useGetMeQuery } from '../../services/auth/auth-endpoints/auth.api.ts'
import { Navigate, Outlet } from 'react-router-dom'
import { PATH } from '../constants'

export const ProtectedRoutes = () => {
  const { data, isLoading } = useGetMeQuery()

  if (isLoading) return <div>...Loading</div>

  return data ? <Outlet /> : <Navigate to={PATH.LOGIN} />
}
