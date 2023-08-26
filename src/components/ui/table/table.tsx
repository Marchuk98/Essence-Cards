import { ComponentProps, ComponentPropsWithoutRef, FC } from 'react'
import { clsx } from 'clsx'

import { Typography } from '../typography'
import { ChevronDown } from '../../../assets/icons'

import s from './table.module.scss'

type TableProps = { className?: string } & ComponentProps<'table'>

const Root: FC<TableProps> = ({ className, ...rest }) => {
  const classNames = clsx(s.table, className)

  return <table className={classNames} {...rest} />
}

export type Sort = {
  columnKey: string
  direction: 'asc' | 'desc' | null
} | null
type Column = {
  key: string
  title: string
  sortable: boolean
}
type HeadProps = Omit<
  ComponentPropsWithoutRef<'thead'> & {
    columns: Column[]
    sort?: Sort
    onSort?: (sort: Sort) => void
    className?: string
  },
  'children'
>
const Head: FC<HeadProps> = ({ columns, sort, onSort, className, ...rest }) => {
  const handlerSort = (key: string, sortable?: boolean) => {
    if (!onSort || !sortable) return

    let newSort: Sort

    if (key !== sort?.columnKey) {
      newSort = { columnKey: key, direction: 'asc' }
    } else if (sort.direction === 'asc') {
      newSort = { columnKey: key, direction: 'desc' }
    } else {
      newSort = null
    }
    onSort(newSort)
  }

  return (
    <thead className={className} {...rest}>
      <tr>
        {columns.map(col => {
          const handler = () => {
            handlerSort(col.key, col.sortable)
          }

          return (
            <Table.HeadCell
              sort={sort}
              title={col.title}
              onClick={handler}
              key={col.key}
              columnKey={col.key}
              sortable={col.sortable}
            />
          )
        })}
      </tr>
    </thead>
  )
}

type BodyProps = { className?: string } & ComponentProps<'tbody'>
const Body: FC<BodyProps> = ({ className, ...rest }) => {
  return <tbody className={className} {...rest} />
}

type RowProps = { className?: string } & ComponentProps<'tr'>
const Row: FC<RowProps> = ({ className, ...rest }) => {
  return <tr className={className} {...rest} />
}

type HeadCellProps = {
  minWidth?: number
  className?: string
  title?: string
  columnKey?: string
  sort?: Sort
  onClick?: (sortDirection: string) => void
  sortable?: boolean
} & ComponentProps<'th'>
const HeadCell: FC<HeadCellProps> = ({
  sortable,
  onClick,
  sort,
  columnKey,
  title,
  className,
  ...rest
}) => {
  const classNames = {
    th: clsx(s.headCell, !sortable && s.noSort, className),
    title: clsx(s.title),
    icon: clsx(s.sortDscIcon, sort?.direction === 'asc' && s.sortAscIcon),
    text: clsx(s.tableHead),
  }
  const showSortIcon = sort?.columnKey === columnKey && sort?.direction
  const handleClick = () => {
    if (onClick && columnKey) {
      onClick(columnKey)
    }
  }

  return (
    <th className={classNames.th} {...rest} onClick={handleClick}>
      <div className={classNames.title}>
        <Typography variant={'subtitle_2'} className={classNames.text}>{title}</Typography>
        <div className={classNames.icon}>{showSortIcon && <ChevronDown />}</div>
      </div>
    </th>
  )
}

type TableCellProps = { className?: string } & ComponentProps<'td'>
const TableCell: FC<TableCellProps> = ({ children, content, className, ...rest }) => {
  const classNames = clsx(s.tableCell, className)

  return (
    <td className={classNames} {...rest}>
      {children}
    </td>
  )
}

export const Table = { TableCell, HeadCell, Row, Body, Head, Root }
