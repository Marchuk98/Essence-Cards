import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { CheckboxProps, Checkbox } from '../ui'

type ControlledCheckboxProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'rules' | 'defaultValue'
> &
  Omit<CheckboxProps, 'onChange' | 'value'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  name,
  shouldUnregister,
  ...rest
}: ControlledCheckboxProps<T>) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control, shouldUnregister })

  const handleChange = onChange as (value: boolean) => void

  return (
    <Checkbox
      checked={value}
      onChange={handleChange}
      errorMessage={error?.message}
      {...rest}
    />
  )
}
