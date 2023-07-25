import { Button, Card, Typography, UserAvatar, FileInput } from '../../ui'

import { UseProfileForm } from '../../../common/schemas'
import { useState } from 'react'

import { Edit, Logout } from '../../../images/svg/icons'
import { ControlledTextField } from '../../controlled'

import s from './personal-information.module.scss'

type PersonalInformationProps = {
  name: string
  email: string
  avatar: string
  onChangeAvatar: (newAvatar: string) => void
  // onChangeName: (data: ProfileFormInput) => void
  onLogout?: () => void
}

export const PersonalInformation = (props: PersonalInformationProps) => {
  const { name, email, avatar, onChangeAvatar, onLogout } = props

  const { handleSubmit, control } = UseProfileForm()

  const [editMode, setEditMode] = useState(false)
  const editModeOnHandler = () => setEditMode(true)

  const changeAvatarHandler = (avatar: File) => onChangeAvatar(avatar.name)

  const onSubmit = handleSubmit(data => {
    // onChangeName(data.nickName)
    setEditMode(false)
    console.log(data)
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
            name={'nickName'}
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
