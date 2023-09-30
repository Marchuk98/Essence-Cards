import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { useCreateBlob } from '../../../common'
import preview from '../../../assets/images/upload-file.png'

import s from './controlled-file-input.module.scss'

type FileInputPropsType<T extends FieldValues> = {
  variant?: 'small' | 'large' | 'medium'
  children: (onClick: () => void) => JSX.Element
  disabled?: boolean
  withPreview: boolean
  cover?: string
} & Omit<UseControllerProps<T>, 'rules' | 'defaultValues' | 'onChange' | 'value' | 'type'>

export const ControlledFileInput = <T extends FieldValues>({
  name,
  control,
  children,
  withPreview,
  cover,
  disabled,
  variant,
  ...rest
}: FileInputPropsType<T>) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [previewImage, setPreviewImage] = useState<File | null>()

  const {
    field: { onChange, value, ref, ...field },
  } = useController({ name, control })

  const { blob } = useCreateBlob(cover ?? preview)
  const myFile = new File([blob ?? ''], 'cover.png', { type: 'image/png' })

  useEffect(() => {
    setPreviewImage(myFile)
    onChange(myFile as any)
  }, [blob])

  const addMediaFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setPreviewImage(undefined)

      return
    }
    setPreviewImage(e.target.files[0])
    onChange(e?.target?.files[0] as any)
  }
  const onClick = () => {
    if (inputRef) {
      inputRef.current?.click()
    }
  }

  return (
    <>
      {withPreview && (
        <img
          className={s.previewImage}
          src={previewImage ? URL.createObjectURL(previewImage) : preview}
          alt="Preview"
        />
      )}
      <input
        className={s.input}
        type="file"
        ref={e => {
          ref(e)
          inputRef.current = e
        }}
        {...rest}
        onChange={addMediaFileHandler}
        {...field}
      />

      {children(onClick)}
    </>
  )
}
