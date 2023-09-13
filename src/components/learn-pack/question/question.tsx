import { Typography } from '../../ui'
import { BlurHashCanvas } from '../../ui/image'
import { useImageOpen } from '../../../common/constants/useImageOpen.ts'
import { ImageModal } from '../../modals-actions/image-modal'

import s from './question.module.scss'

type QuestionType = {
  question?: string
  numberEfforts: number
  questionImg?: string
}

export const Question = (props: QuestionType) => {
  const { question, questionImg, numberEfforts } = props
  const { openImageInModal, setImageModalOpen, image, isImageModalOpen } = useImageOpen()

  return (
    <div>
      <ImageModal
        src={image}
        alt={'question'}
        isOpen={isImageModalOpen}
        setIsOpen={setImageModalOpen}
      />

      <Typography as={'div'} variant={'body_1'} className={s.question}>
        <Typography as={'span'} variant={'subtitle_1'} className={s.titleQuestion}>
          Question:{' '}
        </Typography>
        {question}
        {questionImg && (
          <div className={s.questionCover}>
            <BlurHashCanvas
              src={questionImg}
              alt={'question'}
              className={s.img}
              blurWidth={362}
              blurHeight={120}
              onClick={() => openImageInModal(questionImg)}
            />
          </div>
        )}
      </Typography>
      <Typography variant={'body_2'} color={'inherit'} className={s.efforts}>
        Number of attempts to answer the question: {numberEfforts}
      </Typography>
    </div>
  )
}