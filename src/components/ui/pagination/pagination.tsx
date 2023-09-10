import { PerPageSelect } from './per-page-select'
import { NextButton, PrevButton } from './navigation-buttons'
import { PrimaryPaginationButtons } from './primary-pagination-buttons'
import { usePagination } from './usePagination/usePagination.ts'

import s from './pagination.module.scss'

type PaginationConditionals =
  | {
      perPage?: number
      perPageOptions?: never
      onPerPageChange?: never
    }
  | {
      perPage?: number
      perPageOptions: string[]
      onPerPageChange?: (itemPerPage: string) => void
    }

export type PaginationProps = {
  totalCount: number
  page: number
  onChange: (page: number) => void
  siblings: number
  perPage: number
  perPageOptions: string[]
  onPerPageChange: (itemPerPage: string) => void
} & PaginationConditionals

export const Pagination = ({
  onChange,
  totalCount,
  page = 1,
  perPage,
  perPageOptions,
  onPerPageChange,
  siblings,
}: PaginationProps) => {
  const {
    paginationRange,
    isLastPage,
    isFirstPage,
    handlePreviousPageClicked,
    handleNextPageClicked,
    handleMainPageClicked,
  } = usePagination({
    totalCount,
    page,
    siblings,
    onChange,
  })

  const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

  return (
    <div className={s.root}>
      <div className={s.container}>
        <PrevButton onClick={handlePreviousPageClicked} disabled={isFirstPage} />

        <PrimaryPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton onClick={handleNextPageClicked} disabled={isLastPage} />
      </div>

      {showPerPageSelect && (
        <PerPageSelect
          perPageOptions={perPageOptions}
          onPerPageChange={onPerPageChange}
          perPage={perPage}
        />
      )}
    </div>
  )
}