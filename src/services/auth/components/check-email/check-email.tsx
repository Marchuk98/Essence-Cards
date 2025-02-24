import { Page } from '../../../../components/ui'
import { CheckEmailForm } from '../../../../components/auth'

export const CheckEmail = () => {
  return (
    <Page flex>
      <CheckEmailForm email={'email'} />
    </Page>
  )
}
