import { Button, Card, ControlledFileInput, Typography, UserAvatar } from '../../ui'
import { PATH, ProfileAvatarForm, UseProfileAvatarForm } from '../../../common'
import { ArrowLeftIcon, Edit, Logout } from '../../../assets/icons'
import { EditableTextField } from '../../ui/editable-text-field'
import { useGetMeQuery, useResendEmailMutation, useUpdateUserMutation } from '../../../services'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { htmlCodeVerificationMail } from '../../../common/constants/html-mail-verificated.ts'

import s from './personal-information.module.scss'

type PersonalInformationProps = {
  name: string
  email: string
  avatar: string
  onSaveChanges: (value: string | undefined) => void
  onLogout: () => void
  isEmailVerify?: boolean
  userId: string
}

export const PersonalInformation = (props: PersonalInformationProps) => {
  const { name, email, avatar, onLogout, onSaveChanges, isEmailVerify, userId } = props

  const { handleSubmit, control } = UseProfileAvatarForm()
  const { data: me } = useGetMeQuery()
  const [updateAvatar] = useUpdateUserMutation()
  const [resentVerEmail] = useResendEmailMutation()
  const navigate = useNavigate()

  const [editMode, setEditMode] = useState(false)
  const activateEditMode = () => setEditMode(true)

  const onSubmit = handleSubmit((data: ProfileAvatarForm) => {
    const form = new FormData()

    form.append('name', me?.name ?? '')
    form.append('avatar', data.avatar ?? '')

    updateAvatar(form)
  })

  const verifyEmail = async () => {
    const RequestData = {
      userId,
      html: htmlCodeVerificationMail,
    }

    await resentVerEmail(RequestData)
      .unwrap()
      .then(() => {
        toast.success(`The message was sent to ${email}`)
        navigate(PATH.VERIFY)
      })
      .catch(err => toast.error(err.data.message))
  }

  return (
    <div>
      <div>
        <Typography variant={'body_2'} onClick={() => navigate(-1)} className={s.backArrow}>
          <ArrowLeftIcon /> Back
        </Typography>
      </div>
      <div>
        <Card className={s.card}>
          <Typography variant={'large'} as={'h1'}>
            Personal Information
          </Typography>
          <div className={s.avatarContainer}>
            <UserAvatar className={s.avatar} name={name} src={avatar} size={'6rem'} />
            {!editMode && (
              <div className={s.editAvatar}>
                <form onChange={onSubmit} className={s.formFileInput}>
                  <ControlledFileInput control={control} withPreview={false} name={'avatar'}>
                    {onClick => <Edit onClick={onClick} />}
                  </ControlledFileInput>
                </form>
              </div>
            )}
          </div>
          <div className={s.name}>
            <Typography variant={'h1'}>{name}</Typography>
            <Edit onClick={activateEditMode} className={s.editIcon} />
          </div>
          <Typography variant={'body_2'} className={s.email}>
            {email}
          </Typography>
          {!isEmailVerify && (
            <Button className={s.verify} variant={'primary'} onClick={verifyEmail}>
              Verify email
            </Button>
          )}
          <Button variant={'secondary'} onClick={onLogout} className={s.logoutBtn}>
            <Logout />
            Logout
          </Button>
          {editMode && (
            <EditableTextField
              text={name}
              onSaveChanges={value => {
                onSaveChanges(value)
                setEditMode(false)
              }}
            />
          )}
        </Card>
      </div>
    </div>
  )
}
