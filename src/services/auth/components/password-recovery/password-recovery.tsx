import { Page } from '../../../../components/ui'
import { ForgotPasswordForm } from '../../../../components/auth'
import { useRecoveryPasswordMutation } from '../../auth-endpoints'
import { htmlCodeResetPassword } from '../../../../common/constants/html-mail-reset-password.ts'
import { useNavigate } from 'react-router-dom'
import { ForgotPasswordInput, PATH } from '../../../../common'
import { toast } from 'react-toastify'

export const PasswordRecovery = () => {
  const [recoverPassword] = useRecoveryPasswordMutation()
  const navigate = useNavigate()
  const recoveryPasswordHandler = async (data: ForgotPasswordInput) => {
    const RequestData = {
      html: htmlCodeResetPassword,
      email: data.email,
      subject: 'Recovery password',
    }
    await recoverPassword(RequestData)
      .unwrap()
      .then(() => {
        toast.success('the letter has been sent to the post office')
        navigate(PATH.CHECK_EMAIL)
      })
      .catch(err => toast.error(err.data.message))
  }

  return (
    <Page flex>
      <ForgotPasswordForm onSubmitHandler={recoveryPasswordHandler} />
    </Page>
  )
}