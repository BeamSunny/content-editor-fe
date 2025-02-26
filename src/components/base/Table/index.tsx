// Lib
import React, { useEffect, useState } from 'react'

// Image
import UnfoldMoreIcon from '@images/commons/chevronUpAndDown'

// Include Project
import { TSort, EFilterType, ESort } from '@utils/type'
import { getIn, useFormikContext } from 'formik'
import { FilterOnTable, Pagination } from '@components/shared'
import { Button } from '@components/base'
import styles from './index.module.scss'
import { TOption } from '@datability/8ui'

export type TValueObjectKey = {
  name: string
  isHaveSort: boolean
  isFilter: boolean
  options?: TOption[]
  filterType?: EFilterType
}

export type TTable = {
  filter: Record<string, string | string[] | number | number[] | boolean[] | null | null[] | Date[]>
  sorts: Record<string, TSort>
  pagination: {
    pageSize: number
    totalPage: number
    totalItem: number
    currentPage: number
  }
}

export type TButtonOnTable = {
  startIcon?: string
  onClick: () => void
  name?: string
}

type Props = {
  objectKey: Record<string, TValueObjectKey>
  tableData: Record<string, string | number | JSX.Element>[]
  showPagination?: boolean
  buttonOnTable?: TButtonOnTable[]
}

const Table: React.FC<Props> = ({ objectKey, tableData, showPagination = true, buttonOnTable }) => {
  const { values, setFieldValue } = useFormikContext<{ table: TTable }>()
  const [columnTable, setColumnTable] = useState<Record<string, TValueObjectKey>>(objectKey)
  const filterData = Object.keys(columnTable).filter((key) => columnTable[key].isFilter)

  useEffect(() => {
    setColumnTable(objectKey)
  }, [JSON.stringify(objectKey)])

  const handleSortsColumn = (target: string) => {
    const keys: string[] = Object.keys(columnTable).map((k) => k)
    const newSorts: Record<string, TSort> = {}

    for (let i = 0; i < keys.length; i++) {
      const k = keys[i]

      if (k === target) {
        newSorts[k] = getIn(values, `table.sorts.${target}`) === ESort.Desc ? ESort.Asc : ESort.Desc
      } else {
        newSorts[k] = null
      }
    }

    setFieldValue(`table.sorts`, newSorts)
  }

  return (
    <>
      <div className="row justify-space-between align-start width-100">
        <div className={`row gap-sm width-100 flex-wrap`}>
          {filterData.map((menu, index) => (
            <FilterOnTable key={index} data={columnTable[menu]} name={menu} />
          ))}
        </div>

        <div className={`row gap-sm justify-end align-center ${buttonOnTable && styles.width30}`}>
          {buttonOnTable &&
            buttonOnTable.map((button, index) => (
              <Button key={index} name={button.name} size="Sm" startIcon={button.startIcon} onClick={button.onClick} />
            ))}
        </div>
      </div>
      <section className={`${styles.wapperTable}`}>
        <table className={styles.tableMain}>
          <thead>
            <tr>
              {Object.keys(columnTable).map((key, index) => (
                <th
                  key={index}
                  className={columnTable[key].isHaveSort ? 'cursor aria-hidden' : 'aria-hidden'}
                  onClick={() => columnTable[key].isHaveSort && handleSortsColumn(key)}
                >
                  <div className="row align-center">
                    {columnTable[key].name}
                    {columnTable[key].isHaveSort && <></>}
                    <UnfoldMoreIcon />
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData.length <= 0 ? (
              <tr>
                <td colSpan={Object.keys(objectKey).length}>No Data</td>
              </tr>
            ) : (
              <>
                {tableData.map((data, index) => {
                  return (
                    <tr key={index}>
                      {Object.keys(objectKey).map((key, indexKey) => {
                        if (key === 'no') {
                          return (
                            <td key={indexKey}>
                              {(getIn(values, `table.pagination.currentPage`) - 1) *
                                getIn(values, `table.pagination.pageSize`) +
                                Number(data[key])}
                            </td>
                          )
                        }

                        return <td key={indexKey}>{data[key] ? data[key] : '-'}</td>
                      })}
                    </tr>
                  )
                })}
              </>
            )}
          </tbody>
        </table>
      </section>
      {showPagination && getIn(values, `table.pagination.totalPage`) > 1 && (
        <section className="row justify-end align-center gap-sm width-100">
          <Pagination />
        </section>
      )}
    </>
  )
}

export default Table
