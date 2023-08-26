import { Button, Card, FileInput, Typography, UserAvatar } from '../../ui'

import { ProfileAvatarForm, UseProfileAvatarForm } from '../../../common'

import { Edit, Logout } from '../../../assets/icons'

import { EditableTextField } from '../../ui/editable-text-field'
import { useGetMeQuery, useUpdateUserMutation } from '../../../services'
import { useState } from 'react'

import s from './personal-information.module.scss'

type PersonalInformationProps = {
  name: string
  email: string
  avatar: string
  onSaveChanges: (value: string | undefined) => void
  onLogout: () => void
}

export const PersonalInformation = (props: PersonalInformationProps) => {
  const { name, email, avatar, onLogout, onSaveChanges } = props

  const { handleSubmit, control } = UseProfileAvatarForm()
  const { data: me } = useGetMeQuery()
  const [updateAvatar] = useUpdateUserMutation()

  const [editMode, setEditMode] = useState(false)
  const activateEditMode = () => setEditMode(true)

  const onSubmit = handleSubmit((data: ProfileAvatarForm) => {
    const form = new FormData()

    form.append('name', me?.name ?? '')
    form.append('avatar', data.avatar ?? '')

    updateAvatar(form)
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Personal Information
      </Typography>
      <UserAvatar className={s.avatar} name={name} src={avatar} size={'6rem'} />
      {!editMode ? (
        <>
          <div className={s.editAvatar}>
            <form onChange={onSubmit} className={s.formFileInput}>
              <FileInput control={control} withPreview={false} name={'avatar'}>
                {onClick => <Edit onClick={onClick} />}
              </FileInput>
            </form>
          </div>
          <div className={s.name}>
            <Typography variant={'h1'}>{name}</Typography>
            <Edit onClick={activateEditMode} className={s.editIcon} />
          </div>
          <Typography variant={'body_2'} className={s.email}>
            {email}
          </Typography>
          <Button variant={'secondary'} onClick={onLogout} className={s.logoutBtn}>
            <Logout />
            Logout
          </Button>
        </>
      ) : (
        <EditableTextField
          text={name}
          onSaveChanges={value => {
            onSaveChanges(value)
            setEditMode(false)
          }}
        />
      )}
    </Card>
  )
}
