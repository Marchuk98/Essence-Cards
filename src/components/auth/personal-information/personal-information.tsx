import { Button, Card, Typography, UserAvatar, FileInput } from '../../ui'

import { ProfileFormInput, UseProfileForm } from '../../../common'
import { useState } from 'react'

import { Edit, Logout } from '../../../images/svg/icons'
import { ControlledTextField } from '../../controlled'

import s from './personal-information.module.scss'

export type UpdateProfileType = ProfileFormInput & { avatar?: File }

type PersonalInformationProps = {
  name: string
  email: string
  avatar: string
  onChangeProfile: (profile: UpdateProfileType) => void
  onLogout: () => void
}

export const PersonalInformation = (props: PersonalInformationProps) => {
  const { name, email, avatar, onChangeProfile, onLogout } = props

  const { handleSubmit, control } = UseProfileForm()

  const [editMode, setEditMode] = useState(false)
  const editModeOnHandler = () => setEditMode(true)

  const changeAvatarHandler = (avatar: File) => {
    onChangeProfile({ avatar })
  }

  const onSubmit = handleSubmit(data => {
    onChangeProfile({ name: data.name })
    setEditMode(false)
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'}>Personal Information</Typography>
      <UserAvatar
        className={s.avatar}
        name={name}
        src={avatar}
        width={96}
        height={96}
        avatarContent={!editMode && <FileInput onChange={changeAvatarHandler} trigger={<Edit />} />}
      />
      {editMode ? (
        <form onSubmit={onSubmit}>
          <ControlledTextField
            control={control}
            name={'name'}
            label={'Nickname'}
            className={s.textField}
          />
          <Button type={'submit'} className={s.saveBtn} fullWidth>
            Save Changes
          </Button>
        </form>
      ) : (
        <>
          <div className={s.name}>
            <Typography variant={'h1'}>{name}</Typography>
            <Edit onClick={editModeOnHandler} className={s.editIcon} />
          </div>
          <Typography variant={'body_2'} className={s.email}>
            {email}
          </Typography>
          <Button variant={'secondary'} onClick={onLogout} className={s.logoutBtn}>
            <Logout />
            Logout
          </Button>
        </>
      )}
    </Card>
  )
}
