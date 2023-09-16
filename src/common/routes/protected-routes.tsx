import { useGetMeQuery } from '../../services'
import { Navigate, Outlet } from 'react-router-dom'
import { PATH } from '../constants'
import { MainLoader } from '../../assets/loaders/main-loader'

export const ProtectedRoutes = () => {
  const { data, isLoading } = useGetMeQuery()

  if (isLoading) return <MainLoader />

  return data ? <Outlet /> : <Navigate to={PATH.LOGIN} />
}
