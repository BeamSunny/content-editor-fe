// Lib
import React from 'react'
import { getIn, useFormikContext } from 'formik'

// Image
import ArrowBackIosIcon from '@images/commons/chevronLeft'
import ArrowForwardIosIcon from '@images/commons/chevronRight'

// Include in project
import { TTable } from '@components/base/Table'
import styles from './index.module.scss'

const Pagination: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<{ table: TTable }>()

  const currentPage = getIn(values, `table.pagination.currentPage`)
  const pageSize = getIn(values, `table.pagination.pageSize`)
  const totalPage = getIn(values, `table.pagination.totalPage`)
  const totalItem = getIn(values, `table.pagination.totalItem`)

  const findRangeOfItem = (): string => {
    const endOfRange = currentPage * pageSize
    const startOfRange = endOfRange - pageSize + 1
    return `${startOfRange} - ${endOfRange}`
  }

  const renderBoxNumber = []
  for (let i = 1; i <= totalPage; i++) {
    renderBoxNumber.push(
      <p
        className={`border-radius-md cursor ${styles.boxNumber}`}
        key={i}
        aria-checked={i === currentPage}
        onClick={() => setFieldValue(`table.pagination.currentPage`, i)}
      >
        <small>{i}</small>
      </p>,
    )
  }

  const startSlice = currentPage - 2 - 1
  const enddSlice = currentPage + 3 - 1
  const sliceBoxNumber = renderBoxNumber.slice(startSlice > -1 ? startSlice : 0, enddSlice)

  return (
    <>
      <p style={{ marginRight: '1.5em' }}>
        <small>
          {findRangeOfItem()} of {totalItem}
        </small>
      </p>
      <ArrowBackIosIcon
        className={`cursor ${styles.iconPagination}`}
        onClick={() => currentPage > 1 && setFieldValue(`table.pagination.currentPage`, currentPage - 1)}
        aria-disabled={currentPage === 1}
      />
      {sliceBoxNumber}
      <ArrowForwardIosIcon
        className={`cursor ${styles.iconPagination}`}
        onClick={() => currentPage < totalPage && setFieldValue(`table.pagination.currentPage`, currentPage + 1)}
        aria-disabled={currentPage === totalPage}
      />
    </>
  )
}

export default Pagination
