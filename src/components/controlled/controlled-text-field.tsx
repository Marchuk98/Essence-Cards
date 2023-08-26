import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { TextFieldProps, TextField } from '../ui'

type ControlledTextFieldProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'rules' | 'defaultValue'
> &
  Omit<TextFieldProps, 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledTextFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control })

  return <TextField {...field} {...rest} errorMessage={error?.message} />
}
