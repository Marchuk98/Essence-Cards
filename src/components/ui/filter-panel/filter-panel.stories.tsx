import { Meta, StoryObj } from '@storybook/react'

import { FilterPanel } from './'

const meta = {
  title: 'Components/Filter Panel',
  component: FilterPanel,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FilterPanel>

export default meta
type Story = StoryObj<typeof FilterPanel>

export const Default: Story = {
  render: () => {
    return (
      <>
        <FilterPanel
          searchValue={''}
          sliderValues={[0, 100]}
          onValueCommit={value => console.log(value)}
          onValueChange={value => console.log(value)}
          setMyPacks={value => console.log(value)}
          resetFilters={() => {}}
          setMaxValue={100}
          setSearch={value => console.log(value)}
          isMe={''}
          myPack={''}
        />
      </>
    )
  },
}