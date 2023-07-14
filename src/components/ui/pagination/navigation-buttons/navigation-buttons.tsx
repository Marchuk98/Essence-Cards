import { KeyboardArrowLeft, KeyboardArrowRight } from '../../../../images/svg/icons'

import s from './navigation-buttons.module.scss'

type NavigationButtonProps = {
  disabled: boolean
  onClick: () => void
}

export const PrevButton = ({ onClick, disabled }: NavigationButtonProps) => {
  return (
    <button className={s.arrowButton} onClick={onClick} disabled={disabled}>
      <KeyboardArrowLeft color={disabled ? 'var(--color-dark-100)' : 'var(--color-light-100'} />
    </button>
  )
}

export const NextButton = ({ onClick, disabled }: NavigationButtonProps) => {
  return (
    <button className={s.arrowButton} onClick={onClick} disabled={disabled}>
      <KeyboardArrowRight color={disabled ? 'var(--color-dark-100)' : 'var(--color-light-100'} />
    </button>
  )
}
