import { Outlet, useNavigate } from 'react-router-dom'

import { Header } from '../ui'

import { useGetMeQuery, useLogoutMutation, util } from '../../services'
import { PATH } from '../../common'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../../app/store.ts'

export const Layout = () => {
  const { data } = useGetMeQuery()
  const [logout] = useLogoutMutation()
  const status = useAppSelector(state => state.appReducer.status)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const logOut = () => {
    logout()
      .unwrap()
      .then(() => {
        dispatch(util?.resetApiState())
        navigate(PATH.LOGIN)
      })
      .catch(err => toast(err.data.message))
  }

  return (
    <>
      <Header
        isLoading={status}
        avatar={data?.avatar}
        name={data?.name}
        email={data?.email}
        onSignIn={() => navigate(PATH.LOGIN)}
        onProfileSelect={() => navigate(PATH.PROFILE)}
        onSignOut={logOut}
        isAuth={!!data}
      />
      <Outlet />
    </>
  )
}
