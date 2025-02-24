import { Button, Card, GradeType, Typography } from '../ui'
import { useState } from 'react'
import { Question } from './question'
import { Answer } from './answer'

import s from './learn-pack.module.scss'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '../../assets/icons'
import { useImageOpen } from '../../common/constants/useImageOpen.ts'

type LearnPackType = {
  packName: string
  numberEfforts: number
  question: string
  questionImg: string
  answer: string
  answerImg: string
  loadNextQuestion: (grade: GradeType) => void
}

export const LearnPack = (props: LearnPackType) => {
  const { packName, numberEfforts, loadNextQuestion, question, questionImg, answer, answerImg } =
    props
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  const [radioValue, setRadioValue] = useState('1')
  const imageHookProps = useImageOpen()
  const navigate = useNavigate()
  const handleNextQuestion = () => {
    setShowAnswer(false)
    loadNextQuestion(+radioValue as GradeType)
  }

  return (
    <div>
      <div>
        <Typography variant={'body_2'} onClick={() => navigate(-1)} className={s.backArrow}>
          <ArrowLeftIcon /> Back
        </Typography>
      </div>
      <Card className={s.container}>
        <Typography variant={'large'} className={s.title}>
          {packName}
        </Typography>
        <Question
          numberEfforts={numberEfforts}
          question={question}
          questionImg={questionImg}
          {...imageHookProps}
        />
        {showAnswer && (
          <Answer
            answer={answer}
            answerImg={answerImg}
            radioValue={radioValue}
            setRadioValue={setRadioValue}
            {...imageHookProps}
          />
        )}
        {!showAnswer ? (
          <Button variant={'primary'} onClick={() => setShowAnswer(true)} fullWidth>
            Show answer
          </Button>
        ) : (
          <Button variant={'primary'} onClick={handleNextQuestion} fullWidth>
            Next Question
          </Button>
        )}
      </Card>
    </div>
  )
}
