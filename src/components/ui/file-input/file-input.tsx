import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { clsx } from 'clsx'
import { useCreateBlob } from '../../../common/constants/useBlob.ts'
import preview from '../../../images/react.png'

import s from './file-input.module.scss'

type FileInputPropsType<T extends FieldValues> = {
  variant?: 'small' | 'large' | 'medium'
  children: (onClick: () => void) => JSX.Element
  disabled?: boolean
  withPreview: boolean
  cover?: string
} & Omit<UseControllerProps<T>, 'rules' | 'defaultValues' | 'onChange' | 'value' | 'type'>

export const FileInput = <T extends FieldValues>({
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
  const [previewImage, setPreviewImage] = useState<File>()

  const {
    field: { onChange, value, ref, ...field },
  } = useController({ name, control })

  const classNames = {
    size: clsx(`${s[variant ?? '']}`),
    input: clsx(s.input),
  }

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
        <div
          className={classNames.size}
          style={{
            backgroundImage: `url(${previewImage ? URL.createObjectURL(previewImage) : 'preview'})`,
          }}
        />
      )}
      <input
        className={classNames.input}
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
