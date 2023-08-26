import { ReactNode } from 'react'
import { EditPackForm, useEditPackForm } from '../../../common'
import { Button, FileInput, Modal, Typography } from '../../ui'
import { ControlledCheckbox, ControlledTextField } from '../../controlled'
import { ChangeCover } from '../../../images/svg/icons'

type EditPackModalType = {
  title: string
  trigger: ReactNode
  setIsOpenEditPack: (value: boolean) => void
  onSubmitHandler: (data: EditPackForm) => void
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

  const { handleSubmit, control } = useEditPackForm(packName, isPrivate, cover)

  const onSubmit = handleSubmit(data => {
    onSubmitHandler({ name: data.name, isPrivate: data.isPrivate, cover: data.cover })
    setIsOpenEditPack(false)
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
          <FileInput variant={'large'} cover={cover} name={'cover'} withPreview control={control}>
            {onClick => (
              <Button type={'button'} variant={'secondary'} onClick={onClick}>
                <ChangeCover />
                Change cover
              </Button>
            )}
          </FileInput>
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
