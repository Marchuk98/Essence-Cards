import { LoginForm } from '../../../../components/auth'
import { useGetMeQuery, useLoginMutation, RequestLoginType } from '../../auth-endpoints'
import { Page } from '../../../../components/ui'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../../../common'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

export const Login = () => {
  const [login] = useLoginMutation()
  const { data } = useGetMeQuery()
  const navigate = useNavigate()

  const onSubmit = (data: RequestLoginType) => {
    login(data)
      .unwrap()
      .then(() => {
        navigate(PATH.PACKS)
        toast.success('you are sign in successful')
      })
      .catch(err => {
        toast.error(err.data.message)
      })
  }

  useEffect(() => {
    if (!data) return

    navigate(PATH.PACKS)
  }, [data])

  return (
    <Page flex>
      <LoginForm onSubmitHandler={onSubmit} />
    </Page>
  )
}
