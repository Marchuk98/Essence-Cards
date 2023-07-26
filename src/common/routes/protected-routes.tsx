import { useMeQuery } from '../../services/auth/auth-endpoints/auth.api.ts'

export const ProtectedRoutes = () => {
  const { data, isLoading } = useMeQuery()

  if (isLoading) return <div>...Loading</div>
}
