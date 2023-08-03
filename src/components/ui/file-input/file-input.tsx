import { ChangeEvent, ReactNode, useRef } from 'react'

import { clsx } from 'clsx'

import s from './file-input.module.scss'

type FileInputPropsType = {
  onChange: (file: File) => void
  disabled?: boolean
  trigger: ReactNode
}

export const FileInput = (props: FileInputPropsType) => {
  const { disabled = false, trigger, onChange } = props
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleUploadClick = () => inputRef.current?.click()

  const classNames = {
    trigger: clsx(s.trigger),
    input: clsx(s.input),
  }

  const uploadImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      onChange(file)
    }
  }

  return (
    <div>
      <button onClick={handleUploadClick} disabled={disabled} className={classNames.trigger}>
        {trigger}
      </button>
      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={inputRef}
        onChange={uploadImageHandler}
        className={classNames.input}
      />
    </div>
  )
}
