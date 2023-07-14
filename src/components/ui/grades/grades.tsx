import { FC, ReactNode, useState } from 'react'
import { StarIcon, StarOutlineIcon } from '../../../images/svg/icons'

import { clsx } from 'clsx'

import s from './grades.module.scss'

export type GradeType = 0 | 1 | 2 | 3 | 4 | 5

type GradeProps = {
  onChange: (id: GradeType) => void
  grade: GradeType
}

export const Grades: FC<GradeProps> = ({ onChange, grade = 0 }) => {
  const [mouseOverId, setMouseOverId] = useState<number>(0)

  const validatedGrade = grade > 5 ? 5 : grade

  const starCount = 5
  const outlineStars = starCount - validatedGrade
  const stars = [
    ...Array(grade).fill(<StarIcon />),
    ...Array(outlineStars).fill(<StarOutlineIcon />),
  ]

  return (
    <div className={s.stars}>
      {stars.map((star, id) => {
        const style = clsx(id + 1 <= mouseOverId && s.overStar)
        const starChangeHandle = () => {
          if (grade === 1 && mouseOverId === 1) {
            onChange(0)
          } else {
            onChange((id + 1) as GradeType)
          }
        }

        return (
          <StarItem
            key={id}
            id={id + 1}
            starType={star}
            onChange={starChangeHandle}
            onMouseEnter={setMouseOverId}
            onMouseLeave={setMouseOverId}
            className={style}
            active={id < grade}
          />
        )
      })}
    </div>
  )
}

type StarItemProps = {
  id: number
  starType: ReactNode
  className?: string
  onChange: (id: number) => void
  onMouseEnter: (id: number) => void
  onMouseLeave: (id: number) => void
  active: boolean
}

export const StarItem: FC<StarItemProps> = ({
  onMouseEnter,
  onMouseLeave,
  className,
  starType,
  onChange,
  id,
}) => {
  const classNames = clsx(s.starItem, className)

  return (
    <button
      className={classNames}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave(0)}
      onClick={() => onChange(id)}
      aria-label={`Star ${id}`}
      tabIndex={0}
    >
      {starType}
    </button>
  )
}
