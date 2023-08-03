import { RegisterForm } from '../../../../components/auth'
import { useRegistrationMutation, RequestLoginType } from '../../auth-endpoints'
import { Page } from '../../../../components/ui'
import { PATH } from '../../../../common'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Register = () => {
  const [registration] = useRegistrationMutation()
  const navigate = useNavigate()

  const handleSignUp = (args: RequestLoginType) => {
    return registration(args)
      .unwrap()
      .then(() => {
        toast.success('Signed up successfully')
        navigate(PATH.LOGIN)
      })
      .catch(err => toast.error(err.data.message))
  }

  return (
    <Page flex>
      <RegisterForm onSubmitHandler={handleSignUp} />
    </Page>
  )
}