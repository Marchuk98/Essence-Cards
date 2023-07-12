import { Button, Card, Typography, UserAvatar } from '../../ui'

import s from './personal-information.module.scss'
import { UseProfileForm } from '../../../common/schemas'
import { useState } from 'react'
import { FileInput } from '../../ui/file-input'
import EditIcon from '../../../images/svg/icons/edit-icon.tsx'
import { Logout } from '../../../images/svg/icons'
import { ControlledTextField } from '../../controlled'

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
      <Typography variant={'large'} as={'h1'}>
        Personal Information
      </Typography>
      <UserAvatar
        className={s.avatar}
        name={name}
        src={avatar}
        width={96}
        height={96}
        avatarContent={
          !editMode && <FileInput onChange={changeAvatarHandler} trigger={<EditIcon />} />
        }
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
            <EditIcon onClick={editModeOnHandler} className={s.editIcon} />
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
