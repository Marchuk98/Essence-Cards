import { Button } from '../button'
import {
  ProfileFieldForm,
  UseProfileFieldForm,
} from '../../../common'
import { ControlledTextField } from '../../controlled'

import s from './editable-text-field.module.scss'

type EditableTextFieldType = {
  text: string
  onSaveChanges: (newValue: string | undefined) => void
}

export const EditableTextField = (props: EditableTextFieldType) => {
  const { text, onSaveChanges } = props
  const { handleSubmit, control } = UseProfileFieldForm(text)

  const onSubmit = (data: ProfileFieldForm) => {
    onSaveChanges(data.name)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.formControlContent}>
      <ControlledTextField
        label={'Nickname'}
        name={'name'}
        control={control}
        className={s.textField}
      />
      <Button type={'submit'} fullWidth variant={'primary'} className={s.button}>
        Save Changes
      </Button>
    </form>
  )
}


