import { ReactNode } from 'react'
import { Button, ControlledFileInput, Modal, Typography } from '../../ui'
import { ControlledCheckbox, ControlledTextField } from '../../controlled'
import { ChangeCover } from '../../../assets/icons'
import { useAddPackForm } from '../../../common'
import { toast } from 'react-toastify'

type AddPackModalType = {
  title: string
  trigger: ReactNode
  setIsOpenAddPack: (value: boolean) => void
  onSubmitHandler: (data: FormData) => void
  isOpenAddPack: boolean
}

export const AddPackModal = (props: AddPackModalType) => {
  const { title, trigger, setIsOpenAddPack, onSubmitHandler, isOpenAddPack } = props

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useAddPackForm()

  if (errors.cover) toast.error(`${errors.cover.message}`)

  const onSubmit = handleSubmit(data => {
    const form = new FormData()

    form.append('name', data.name)
    form.append('isPrivate', String(data.isPrivate))
    const appendFile = (key: string, value: File | string) => {
      if (value && typeof value !== 'string' && (value as File).name !== 'cover.png') {
        form.append(key, value as File)
      }
    }

    appendFile('cover', data.cover)
    onSubmitHandler(form)

    setIsOpenAddPack(false)
    reset()
  })

  return (
    <Modal.Root
      isOpen={isOpenAddPack}
      onOpenChange={setIsOpenAddPack}
      trigger={trigger}
      title={title}
    >
      <form onSubmit={onSubmit}>
        <Modal.Body>
          <ControlledFileInput variant={'large'} name={'cover'} withPreview={true} control={control}>
            {onClick => (
              <Button type={'button'} variant={'secondary'} onClick={onClick}>
                <ChangeCover />
                Change cover
              </Button>
            )}
          </ControlledFileInput>
          <ControlledTextField label={'Name Pack'} type={'text'} control={control} name={'name'} />
          <ControlledCheckbox control={control} label={'Private Pack'} name={'isPrivate'} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} type={'submit'}>
            <Typography variant={'subtitle_2'}>Add New Pack</Typography>
          </Button>
          <Button variant={'secondary'} onClick={() => setIsOpenAddPack(false)}>
            <Typography variant={'subtitle_2'}>Cancel</Typography>
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Root>
  )
}
