import { useState } from 'react'
import { cardSchema } from '../../../common'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledTextField } from '../../controlled'
import { Button, FileInput, Modal, Select, Typography } from '../../ui'
import { ChangeCover } from '../../../assets/icons'

type EditCardModalType = {
  title: string
  question: string
  answer: string
  questionImg?: string
  answerImg?: string
  onSubmitHandler: (data: FormData) => void
  actionButtonText: string
  isOpenEditCard: boolean
  setIsOpenEditCard: (value: boolean) => void
}

type CardForm = z.infer<typeof cardSchema>

export const EditCardModal = (props: EditCardModalType) => {
  const {
    title,
    setIsOpenEditCard,
    isOpenEditCard,
    answer,
    answerImg,
    questionImg,
    question,
    onSubmitHandler,
    actionButtonText,
  } = props

  const [type, setType] = useState<string>('Text')

  const { handleSubmit, control } = useForm<CardForm>({
    resolver: zodResolver(cardSchema),
    mode: 'onSubmit',
    defaultValues: {
      question,
      answer,
      answerImg,
      questionImg,
    },
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
    setIsOpenEditCard(false)
  })

  const questionType =
    type === 'Text' ? (
      <>
        <ControlledTextField name={'question'} control={control} label={'Question'} type={'text'} />
        <ControlledTextField name={'answer'} control={control} label={'Answer'} type={'text'} />
      </>
    ) : (
      <>
        <FileInput withPreview name={'questionImg'} cover={questionImg} control={control}>
          {onClick => (
            <Button variant={'secondary'} onClick={onClick} type={'button'}>
              <ChangeCover />
              Change cover
            </Button>
          )}
        </FileInput>
        <FileInput withPreview name={'answerImg'} cover={answerImg} control={control}>
          {onClick => (
            <Button variant={'secondary'} onClick={onClick} type={'button'}>
              <ChangeCover />
              Change cover
            </Button>
          )}
        </FileInput>
      </>
    )

  return (
    <Modal.Root title={title} onOpenChange={setIsOpenEditCard} isOpen={isOpenEditCard}>
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
          <Button variant={'secondary'} onClick={() => setIsOpenEditCard(false)}>
            <Typography variant={'subtitle_2'}>Cancel</Typography>
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Root>
  )
}
