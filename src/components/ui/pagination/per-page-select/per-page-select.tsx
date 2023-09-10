import { Select } from '../../select'

import s from './per-page-select.module.scss'

export type PerPageSelectPropsType = {
  perPage: number
  perPageOptions: string[]
  onPerPageChange: (itemPerPage: string) => void
}

export const PerPageSelect = ({
  perPage,
  perPageOptions,
  onPerPageChange,
}: PerPageSelectPropsType) => {
  return (
    <div className={s.selectBox}>
      Rows
      <Select value={`${perPage}`} items={perPageOptions} onChange={onPerPageChange} />
      per page
    </div>
  )
}
