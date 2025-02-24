import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Page } from '../../../../components/ui'
import { LoginForm } from '../../../../components/auth'
import { useAppDispatch } from '../../../../app/store.ts'
import { RequestLoginType, useGetMeQuery, useLoginMutation, util } from '../../auth-endpoints'

export const Login = () => {
  const [login] = useLoginMutation()

  const { data } = useGetMeQuery()

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const onSubmit = async (data: RequestLoginType) => {
    try {
      await login(data).unwrap()
      dispatch(util?.resetApiState())
      navigate('/')
      toast.success('you are sign in successful')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (data) {
      navigate('/')
    }
  }, [data, navigate])

  return (
    <Page flex>
      <LoginForm onSubmitHandler={onSubmit} />
    </Page>
  )
}
