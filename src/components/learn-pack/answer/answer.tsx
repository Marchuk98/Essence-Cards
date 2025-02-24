import { RadioGroup, Typography } from '../../ui'
import { BlurHashCanvas } from '../../ui/image'
import { answersGrade } from './answers-grade.ts'
import { ImageModal } from '../../modals-actions/image-modal'

import s from './answer.module.scss'

type AnswerType = {
  answer?: string
  answerImg?: string
  radioValue: string
  setRadioValue: (value: string) => void
  image: string
  isImageModalOpen: boolean
  openImageInModal: (src: string) => void
  setImageModalOpen: (value: boolean) => void
}

export const Answer = (props: AnswerType) => {
  const {
    answer,
    answerImg,
    radioValue,
    setRadioValue,
    image,
    openImageInModal,
    setImageModalOpen,
    isImageModalOpen,
  } = props

  return (
    <div>
      <ImageModal
        src={image}
        alt={'answer'}
        isOpen={isImageModalOpen}
        setIsOpen={setImageModalOpen}
      />
      <Typography as={'div'} variant={'body_1'} className={s.answer}>
        <Typography as={'span'} variant={'subtitle_1'} className={s.titleAnswer}>
          Answer:{' '}
        </Typography>
        {answer}
        {answerImg && (
          <div className={s.answerCover}>
            <BlurHashCanvas
              src={answerImg}
              alt={'answer'}
              blurWidth={362}
              blurHeight={120}
              className={s.img}
              onClick={() => openImageInModal(answerImg)}
            />
          </div>
        )}
      </Typography>

      <Typography variant={'subtitle_1'} className={s.feedback}>
        Rate yourself:
      </Typography>

      <RadioGroup
        options={answersGrade}
        value={radioValue}
        className={s.radioGroup}
        onValueChange={setRadioValue}
      />
    </div>
  )
}
