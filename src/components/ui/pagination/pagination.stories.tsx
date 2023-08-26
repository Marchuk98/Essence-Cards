import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './pagination'
import { Typography } from '../typography'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'page changed' },
    siblings: { control: { type: 'number' } },
    totalCount: { control: { type: 'number' } },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState('10')


    return (
      <div>
        <Pagination
          {...args}
          page={page}
          onChange={setPage}
          perPage={+perPage}
          onPerPageChange={setPerPage}
          perPageOptions={['10', '20', '60', '80', '100']}
        />
        <Typography variant={'body_2'} color={'secondary'}>
          Current page: {page}
        </Typography>
        <Typography variant={'body_2'} color={'secondary'}>
          Per page: {perPage}
        </Typography>
      </div>
    )
  },
}
