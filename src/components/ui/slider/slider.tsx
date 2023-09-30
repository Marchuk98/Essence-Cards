import * as SliderRadix from '@radix-ui/react-slider'

import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './slider.module.scss'

export type SliderProps = {
  value: [number, number]
  minValue: number
  maxValue: number
  step?: number
  max?: number
  min?: number
  disabled?: boolean
  label?: string
  className?: string
  onValueChange?: (values: [number, number]) => void
  onValueCommit?: (values: [number, number]) => void
}

export const Slider = (props: SliderProps) => {
  const {
    value,
    minValue,
    maxValue,
    max = 100,
    min = 0,
    step = 1,
    disabled,
    label,
    className,
    onValueChange,
    onValueCommit,
  } = props

  const classNames = {
    container: clsx(s.container, className, disabled ? s.disabled : ''),
    wrapper: clsx(s.wrapper),
    value: clsx(s.value),
    root: clsx(s.SliderRoot),
    track: clsx(s.SliderTrack),
    range: clsx(s.SliderRange),
    thumb: clsx(s.SliderThumb),
    label: clsx(s.label),
  }

  return (
    <div className={classNames.container}>
      {label && (
        <Typography variant={'body_1'} className={classNames.label}>
          {label}
        </Typography>
      )}
      <div className={classNames.wrapper}>
        <div className={classNames.value}>{minValue}</div>
        <SliderRadix.Root
          disabled={disabled}
          className={classNames.root}
          defaultValue={[minValue, maxValue]}
          max={max}
          min={min}
          step={step}
          value={value}
          onValueChange={onValueChange}
          onValueCommit={onValueCommit}
        >
          <SliderRadix.Track className={classNames.track}>
            <SliderRadix.Range className={classNames.range} />
          </SliderRadix.Track>
          <SliderRadix.Thumb className={classNames.thumb} />
          <SliderRadix.Thumb className={classNames.thumb} />
          <SliderRadix.Thumb className={classNames.thumb} />
        </SliderRadix.Root>
        <div className={classNames.value}>{maxValue}</div>
      </div>
    </div>
  )
}
