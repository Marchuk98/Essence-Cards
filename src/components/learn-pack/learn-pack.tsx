import { Button, Card, GradeType, Typography } from '../ui'
import { useState } from 'react'
import { Question } from './question/question.tsx'
import { Answer } from './answer/answer.tsx'

import s from './learn-pack.module.scss'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '../../assets/icons'

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
        <Question numberEfforts={numberEfforts} question={question} questionImg={questionImg} />
        {showAnswer && (
          <Answer
            answer={answer}
            answerImg={answerImg}
            radioValue={radioValue}
            setRadioValue={setRadioValue}
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