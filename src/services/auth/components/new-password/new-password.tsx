import { Page } from '../../../../components/ui'
import { CreateNewPasswordForm } from '../../../../components/auth'
import { useResetPasswordMutation } from '../../auth-endpoints'
import { useNavigate, useParams } from 'react-router-dom'
import { CreateNewPasswordInput, PATH } from '../../../../common'
import { toast } from 'react-toastify'

type Params = {
  token: string
}

export const NewPassword = () => {
  const [resetPassword] = useResetPasswordMutation()
  const { token } = useParams<Params>()
  const navigate = useNavigate()

  const resetPasswordHandler = async (password: CreateNewPasswordInput) => {
    if (token) {
      await resetPassword({ token, ...password })
        .unwrap()
        .then(() => {
          toast.success('Password changed successfully')
          navigate(PATH.LOGIN)
        })
        .catch(err => toast.error(err.data.message))
    }
  }

  return (
    <Page flex>
      <CreateNewPasswordForm onSubmitHandler={resetPasswordHandler} />
    </Page>
  )
}