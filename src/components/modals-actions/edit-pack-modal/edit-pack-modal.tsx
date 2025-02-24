import { ReactNode } from 'react'
import { editPackSchema } from '../../../common'
import { Button, ControlledFileInput, Modal, Typography } from '../../ui'
import { ControlledCheckbox, ControlledTextField } from '../../controlled'
import { ChangeCover } from '../../../assets/icons'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type EditPackModalType = {
  title: string
  trigger: ReactNode
  setIsOpenEditPack: (value: boolean) => void
  onSubmitHandler: (data: FormData) => void
  isOpenEditPack: boolean
  cover: string
  isPrivate: boolean
  packName: string
}

export const EditPackModal = (props: EditPackModalType) => {
  const {
    title,
    trigger,
    setIsOpenEditPack,
    onSubmitHandler,
    isOpenEditPack,
    cover,
    packName,
    isPrivate,
  } = props

  type EditPackForm = z.infer<typeof editPackSchema>

  const { handleSubmit, control } = useForm<EditPackForm>({
    resolver: zodResolver(editPackSchema),
    mode: 'onSubmit',
    defaultValues: {
      name: packName,
      isPrivate,
      cover,
    },
  })

  const onSubmit = handleSubmit(data => {
    const form = new FormData()

    form.append('name', data.name)
    form.append('isPrivate', String(data.isPrivate))
    form.append('cover', data.cover)

    onSubmitHandler(form), setIsOpenEditPack(false)
  })

  return (
    <Modal.Root
      isOpen={isOpenEditPack}
      onOpenChange={setIsOpenEditPack}
      trigger={trigger}
      title={title}
    >
      <form onSubmit={onSubmit}>
        <Modal.Body>
          <ControlledFileInput
            variant={'large'}
            cover={cover}
            name={'cover'}
            withPreview
            control={control}
          >
            {onClick => (
              <Button type={'button'} variant={'secondary'} onClick={onClick}>
                <ChangeCover />
                <Typography variant={'subtitle_2'}>Change Cover</Typography>
              </Button>
            )}
          </ControlledFileInput>
          <ControlledTextField label={'Name Pack'} type={'text'} control={control} name={'name'} />
          <ControlledCheckbox control={control} label={'Private Pack'} name={'isPrivate'} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} type={'submit'}>
            <Typography variant={'subtitle_2'}>Save Changes</Typography>
          </Button>
          <Button variant={'secondary'} onClick={() => setIsOpenEditPack(false)}>
            <Typography variant={'subtitle_2'}>Cancel</Typography>
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Root>
  )
}
