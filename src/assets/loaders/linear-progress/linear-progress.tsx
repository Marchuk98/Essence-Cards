import s from './linear-progress.module.scss'

export const LinearProgress = () => {
  return (
    <div className={s.content}>
      <div className={s.loader}></div>
    </div>
  )
}
