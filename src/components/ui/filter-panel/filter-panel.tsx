import { TextField } from '../text-field'
import { TabSwitcher } from '../tabSwitcher'
import { Slider } from '../slider'
import { Button } from '../button'
import { Trash } from '../../../assets/icons'
import { Typography } from '../typography'

import s from './filter-panel.module.scss'
import { StatusType } from '../../../app/app-slice.ts'

type FilterPanelPropsType = {
  searchValue: string
  setMaxValue: number
  sliderValues: [number, number]
  onValueCommit: (values: [number, number]) => void
  onValueChange: (values: [number, number]) => void
  setMyPacks: (value: string) => void
  setSearch: (value: string) => void
  myPack: string
  isMe: string
  resetFilters: () => void
  status: StatusType
}

export const FilterPanel = (props: FilterPanelPropsType) => {
  const {
    searchValue,
    setMaxValue,
    myPack,
    sliderValues,
    onValueCommit,
    onValueChange,
    setMyPacks,
    setSearch,
    isMe,
    resetFilters,
    status,
  } = props

  const option = [
    { value: isMe, title: 'My Packs' },
    { value: '', title: 'All Packs' },
  ]

  return (
    <div className={s.container}>
      <TextField
        disabled={status === 'loading'}
        value={searchValue}
        onChange={e => setSearch(e.currentTarget.value)}
        title={''}
        placeholder={'search'}
        type={'search'}
        className={s.controlTextField}
      />
      <TabSwitcher
        tabs={option}
        label={'Show packs cards'}
        defaultValue={myPack}
        onValueChange={setMyPacks}
        disabled={status === 'loading'}
      />
      <Slider
        max={setMaxValue}
        value={sliderValues}
        minValue={sliderValues[0]}
        maxValue={sliderValues[1]}
        onValueCommit={onValueCommit}
        onValueChange={onValueChange}
        label={'Number of cards'}
        className={s.controlSlider}
        disabled={status === 'loading'}
      />
      <Button
        disabled={status === 'loading'}
        variant={'secondary'}
        onClick={resetFilters}
        className={s.controlButton}
      >
        <Trash />
        <Typography variant={'subtitle_2'}>Clear Filter</Typography>
      </Button>
    </div>
  )
}
