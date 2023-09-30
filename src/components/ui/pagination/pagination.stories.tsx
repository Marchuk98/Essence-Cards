import { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { Pagination, PaginationProps } from './pagination'
import { Typography } from '../typography'

export default {
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    totalCount: 100,
    page: 1,
    siblings: 1,
    perPage: 10,
    perPageOptions: ['10', '20', '50', '100'],
  },
} as Meta

export const Default: Story<PaginationProps> = args => {
  const [page, setPage] = useState(args.page)
  const [perPage, setPerPage] = useState(args.perPage.toString())

  return (
    <div>
      <Pagination
        {...args}
        page={page}
        onChange={setPage}
        perPage={+perPage}
        onPerPageChange={(value: string) => setPerPage(value)}
      />
      <Typography variant="body_2" color="secondary">
        Current page: {page}
      </Typography>
      <Typography variant="body_2" color="secondary">
        Items per page: {perPage}
      </Typography>
    </div>
  )
}