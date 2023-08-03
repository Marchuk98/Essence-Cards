import { useGetMeQuery, useLogoutMutation, util } from '../../../auth'
import { Page } from '../../../../components/ui'
import { PersonalInformation, UpdateProfileType } from '../../../../components/auth'
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

  const onSaveChanges = (updatedData: UpdateProfileType) => {
    if (data) {
      const form = new FormData()

      updatedData.name && form.append('name', updatedData.name)
      updatedData.avatar && form.append('avatar', updatedData.avatar)
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
    <Page flex>
      <PersonalInformation
        name={data.name}
        email={data.email}
        avatar={data.avatar}
        onChangeProfile={onSaveChanges}
        onLogout={logOut}
      />
    </Page>
  )
}