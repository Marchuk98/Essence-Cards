import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { InputPropsType, TextField } from '../ui/text-field'

type ControlledTextFieldProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'rules' | 'defaultValue'
> &
  Omit<InputPropsType, 'onChange' | 'value'>

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
