import * as SliderRadix from '@radix-ui/react-slider'

import { Typography } from '../typography'

import s from './slider.module.scss'

export type SliderProps = {
  defaultValue?: number[]
  value?: number[]
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  isRange?: boolean
  onValueChange?: (values: [number, number]) => void
  onValueCommit?: () => void
}

export const Slider = (props: SliderProps) => {
  const { defaultValue, value, max, min, step, disabled, isRange, onValueChange, onValueCommit } =
    props

  return (
    <div className={s.range}>
      <div className={s.value}>
        <Typography variant={'body_1'}>{value && value[0]}</Typography>
      </div>
      <SliderRadix.Root
        disabled={disabled}
        className={s.SliderRoot}
        defaultValue={defaultValue}
        max={max}
        min={min}
        step={step}
        onValueChange={onValueChange}
        onValueCommit={onValueCommit}
      >
        <SliderRadix.Track className={s.SliderTrack}>
          <SliderRadix.Range className={s.SliderRange} />
        </SliderRadix.Track>
        <SliderRadix.Thumb className={s.SliderThumb} />
        {isRange && <SliderRadix.Thumb className={s.SliderThumb} />}
      </SliderRadix.Root>
      <div className={s.value}>
        <Typography variant={'body_1'}>{(value && value[1]) || max}</Typography>
      </div>
    </div>
  )
}
