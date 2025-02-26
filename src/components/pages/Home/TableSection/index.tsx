// Lib
import React from 'react'

// Images

// Include in project
import { Table } from '@components/base'
import { TButtonOnTable, TValueObjectKey } from '@components/base/Table'
import styles from '../ButtonSection/index.module.scss'
import { EFilterType } from '@utils/type'

const TableSection: React.FC = () => {
  const columns: Record<string, TValueObjectKey> = {
    no: {
      name: `No.`,
      isHaveSort: true,
      isFilter: false,
    },
    name: {
      name: `Name`,
      isHaveSort: true,
      isFilter: true,
      filterType: EFilterType.String,
    },
    status: {
      name: `Status`,
      isHaveSort: true,
      isFilter: true,
      filterType: EFilterType.DropDawn,
      options: [
        { label: 'Active', value: 'ACTIVE' },
        { label: 'Inactive', value: 'INACTIVE' },
      ],
    },
    age: {
      name: `Age`,
      isHaveSort: true,
      isFilter: true,
      filterType: EFilterType.MinMax,
    },
    createdAt: {
      name: `CreatedAt`,
      isHaveSort: true,
      isFilter: true,
      filterType: EFilterType.DateRange,
    },
  }

  const tableData = [
    {
      no: 1,
      name: 'Supagorn Sirimaleewattana',
      status: 'ACTIVE',
      age: 20,
      createdAt: '2023-01-01',
    },
    {
      no: 2,
      name: 'Sorawit Sirimaleewattana',
      status: 'INACTIVE',
      age: 24,
      createdAt: '2023-01-01',
    },
  ]

  const buttonOnTable: TButtonOnTable[] = [
    {
      name: 'Export',
      onClick: () => console.log('Export!'),
    },
  ]

  return (
    <div className={`column ${styles.gap}`}>
      <h2>Table</h2>
      <p>
        The <small className={styles.code}>Table</small> have props objectKey, buttonOnTable and data.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <Table objectKey={columns} tableData={tableData} buttonOnTable={buttonOnTable} />
      </div>
    </div>
  )
}

export default TableSection
