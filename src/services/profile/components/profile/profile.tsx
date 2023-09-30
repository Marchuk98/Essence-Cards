import { useGetMeQuery, useLogoutMutation, util } from '../../../auth'
import { Page } from '../../../../components/ui'
import { PersonalInformation } from '../../../../components/auth'
import { useUpdateUserMutation } from '../../profile-endpoints'
import { useAppDispatch } from '../../../../app/store.ts'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { PATH } from '../../../../common'

export const Profile = () => {
  const { data } = useGetMeQuery()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [logout] = useLogoutMutation()
  const [updateUser] = useUpdateUserMutation()

  const onSaveChanges = (value: string | undefined) => {
    if (data) {
      const form = new FormData()

      form.append('name', value ? value : '')
      updateUser(form)
    }
  }

  const logOut = () => {
    logout()
      .unwrap()
      .then(() => {
        dispatch(util?.resetApiState())
        navigate(PATH.LOGIN)
      })
      .catch(err => toast(err.data.message))
  }

  if (!data) return <div>...Loading</div>

  return (
    <Page flexTb>
      <PersonalInformation
        name={data.name}
        email={data.email}
        avatar={data.avatar}
        onSaveChanges={onSaveChanges}
        onLogout={logOut}
        isEmailVerify={data?.isEmailVerified}
        userId={data.id}
      />
    </Page>
  )
}