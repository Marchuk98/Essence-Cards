import { PageButton } from './page-button'

import { Dots } from './dots'

type MainPaginationButtonsPropsType = {
  paginationRange: (number | string)[]
  currentPage: number
  onClick: (pageNumber: number) => () => void
}

export const PrimaryPaginationButtons = ({
  paginationRange,
  currentPage,
  onClick,
}: MainPaginationButtonsPropsType) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') return <Dots key={index} />

        return <PageButton key={index} page={page} selected={isSelected} onClick={onClick(page)} />
      })}
    </>
  )
}
