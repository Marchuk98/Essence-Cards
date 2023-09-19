import s from './skeleton.module.scss'

type SkeletonType = {
  width?: number
  height?: number
}

export const Skeleton = ({ width = 100, height = 100 }: SkeletonType) => {
  return <div className={s.skeleton} style={{ width, height }}></div>
}
