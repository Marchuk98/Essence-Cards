import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Sort, Table } from './'
import { Checkbox } from '../checkbox'
import { Grades } from '../grades'

const data = [
  {
    id: '01',
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
  },
  {
    id: '02',
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
  },
  {
    id: '03',
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
  },
  {
    id: '04',
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
  },
  {
    id: '05',
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
  },
]

const columns = [
  {
    key: 'name',
    title: 'Name',
    sortable: true,
  },
  {
    key: 'cardsCount',
    title: 'Cards',
    sortable: true,
  },
  {
    key: 'updated',
    title: 'Last Updated',
    sortable: true,
  },
  {
    key: 'createdBy',
    title: 'Created by',
    sortable: true,
  },
  {
    key: 'actions',
    title: '',
    sortable: false,
  },
]

const meta = {
  title: 'Components/Table',
  component: Table.Root,
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [sort, setSort] = useState<Sort>(null)

    return (
      <Table.Root>
        <Table.Head columns={columns} sort={sort} onSort={setSort} />
        <Table.Body>
          {data.map(row => {
            return (
              <Table.Row key={row.id}>
                <Table.TableCell>{row.title}</Table.TableCell>
                <Table.TableCell>{row.cardsCount}</Table.TableCell>
                <Table.TableCell>{row.updated}</Table.TableCell>
                <Table.TableCell>{row.createdBy}</Table.TableCell>
                <Table.TableCell>Option...temp</Table.TableCell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    )
  },
}

export const Head_Cell: Story = {
  args: {
    children: <Table.HeadCell key={'name'} title={'Name'} />,
  },
}

export const Data_Cell: Story = {
  args: {
    children: <Table.TableCell>{'Name'}</Table.TableCell>,
  },
}

export const Data_Cell_With_CheckBox_Name: Story = {
  args: {
    children: <Table.TableCell>{<Checkbox label={'Name'} />}</Table.TableCell>,
  },
}

export const Data_Cell_With_Grade: Story = {
  args: {
    children: (
      <Table.TableCell>
        <Grades
          grade={3}
          onChange={() => {
            console.log()
          }}
        />
      </Table.TableCell>
    ),
  },
}

