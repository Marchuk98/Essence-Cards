import { cardSchema } from '../../../common'
import { z } from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, ControlledFileInput, Modal, Select, Typography } from '../../ui'
import { ControlledTextField } from '../../controlled'
import { ChangeCover } from '../../../assets/icons'

export type AddCardModalType = {
  title: string
  isOpenAddCard: boolean
  setIsOpenAddCard: (value: boolean) => void
  actionButtonText: string
  onSubmitHandler: (data: FormData) => void
}

type CardForm = z.infer<typeof cardSchema>

export const AddCardModal = (props: AddCardModalType) => {
  const { title, isOpenAddCard, setIsOpenAddCard, actionButtonText, onSubmitHandler } = props

  const [type, setType] = useState<string>('Text')

  const { handleSubmit, control, reset } = useForm<CardForm>({
    resolver: zodResolver(cardSchema),
    mode: 'onSubmit',
  })

  const onSubmit = handleSubmit(data => {
    const form = new FormData()

    form.append('question', data.question)
    form.append('answer', data.answer)

    const appendFile = (key: string, value: File | string) => {
      if (value && typeof value !== 'string' && (value as File).name !== 'cover.png') {
        form.append(key, value as File)
      }
    }

    appendFile('questionImg', data.questionImg)
    appendFile('answerImg', data.answerImg)

    onSubmitHandler(form)
    setIsOpenAddCard(false)
    reset()
  })

  const questionType =
    type === 'Text' ? (
      <>
        <ControlledTextField name={'question'} control={control} label={'Question'} type={'text'} />
        <ControlledTextField name={'answer'} control={control} label={'Answer'} type={'text'} />
      </>
    ) : (
      <>
        <ControlledFileInput withPreview name={'questionImg'} control={control}>
          {onClick => (
            <Button variant={'secondary'} onClick={onClick} type={'button'}>
              <ChangeCover />
              Change cover
            </Button>
          )}
        </ControlledFileInput>
        <ControlledFileInput withPreview name={'answerImg'} control={control}>
          {onClick => (
            <Button variant={'secondary'} onClick={onClick} type={'button'}>
              <ChangeCover />
              Change cover
            </Button>
          )}
        </ControlledFileInput>
      </>
    )

  return (
    <Modal.Root title={title} onOpenChange={setIsOpenAddCard} isOpen={isOpenAddCard}>
      <form onSubmit={onSubmit}>
        <Modal.Body>
          <Select
            items={['Text', 'Picture']}
            label={'Choose a question format'}
            value={type}
            placeholder={type}
            onChange={value => setType(value)}
            fullWidth
          />
          {questionType}
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} type={'submit'}>
            <Typography variant={'subtitle_2'}>{actionButtonText}</Typography>
          </Button>
          <Button variant={'secondary'} onClick={() => setIsOpenAddCard(false)}>
            <Typography variant={'subtitle_2'}>Cancel</Typography>
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Root>
  )
}
