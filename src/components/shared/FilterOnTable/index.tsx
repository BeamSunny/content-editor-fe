// Lib
import React, { useState } from 'react'
import { useFormikContext } from 'formik'
import { Input, InputDateRangePicker, InputNumber, InputCheckbox } from '@datability/8ui'
import { Menu as Menu8UI } from '@datability/8ui'

// Image
import ExpandMoreRoundedIcon from '@images/commons/chevronDown'
import FiberManualRecordIcon from '@images/commons/circle'

// Include in project
import { TTable, TValueObjectKey } from 'components/base/Table'
import styles from './index.module.scss'
import { Button } from 'components/base'
import { EFilterType } from 'utils/type'

type Props = {
  data: TValueObjectKey
  name: string
}

const FilterOnTable: React.FC<Props> = ({ data, name }) => {
  const { values, setFieldValue } = useFormikContext<Record<string, TTable>>()
  const [search, setSearch] = useState<string>('')

  const ariaChecked = () => {
    if (data.filterType === EFilterType.String) {
      if ((values[`table`].filter[name] as string)?.length !== 0) return true
      else return false
    } else if (data.filterType === EFilterType.DropDawn) {
      if ((values[`table`].filter[name] as string[] | boolean[])?.length !== 0) return true
      else return false
    } else if (data.filterType === EFilterType.MinMax) {
      if (
        ((values[`table`].filter[`${name}Min`] as number) || (values[`table`].filter[`${name}Min`] as number) == 0) &&
        ((values[`table`].filter[`${name}Max`] as number) || (values[`table`].filter[`${name}Max`] as number) == 0)
      )
        return true
      else return false
    } else return false
  }

  const handleSelectAll = () => {
    const selectAll = data.options?.map((data) => data.value)

    setFieldValue(`table.filter.${name}Show`, selectAll)
  }

  const handleClearAllFilter = () => {
    setFieldValue(`table.filter.${name}Show`, [])
  }

  const handleSubmitFilter = () => {
    if (data.filterType === EFilterType.String)
      setFieldValue(`table.filter.${name}`, values[`table`].filter[`${name}Show`])
    else if (data.filterType === EFilterType.DropDawn)
      setFieldValue(`table.filter.${name}`, values[`table`].filter[`${name}Show`])
    else if (data.filterType === EFilterType.MinMax) {
      setFieldValue(`table.filter.${name}Min`, values[`table`].filter[`${name}MinShow`])
      setFieldValue(`table.filter.${name}Max`, values[`table`].filter[`${name}MaxShow`])
    }
  }

  const filterOptionBySearch = data.options?.filter((ele) => !ele.label.search(search))
  const RenderContent = () => {
    switch (data.filterType) {
      case EFilterType.String:
        return (
          <div className={styles.padding}>
            <Input name={`table.filter.${name}Show`} placeholder="Search" fullWidth />
          </div>
        )

      case EFilterType.DropDawn:
        return (
          <div className={styles.wrap}>
            <div className={`${styles.header}`}>
              <p>
                <small className="cursor" onClick={handleSelectAll}>
                  Select All{' '}
                </small>
                <FiberManualRecordIcon className={styles.dot} />
                <small className="cursor" onClick={handleClearAllFilter}>
                  {' '}
                  Reset
                </small>
              </p>
              <input
                type="text"
                className={styles.inputText}
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className={`${styles.wrapperOption}`}>
              {filterOptionBySearch?.map((menu, index) => (
                <InputCheckbox key={index} name={`table.filter.${name}Show`} options={[menu]} />
              ))}
            </div>
          </div>
        )

      case EFilterType.MinMax:
        return (
          <div className={`row gap-sm ${styles.padding}`}>
            <InputNumber name={`table.filter.${name}MinShow`} label="Min" fullWidth />
            <InputNumber name={`table.filter.${name}MaxShow`} label="Max" fullWidth />
          </div>
        )

      default:
        return <></>
    }
  }

  if (data.filterType === EFilterType.DateRange)
    return (
      <div className={`row gap-sm ${styles.padding} height-100`}>
        <InputDateRangePicker name={`table.filter.${name}`} placeholder={data.name} fullWidth />
      </div>
    )

  return (
    <Menu8UI
      isAutoCloseWhenClickOutsideMenuItem={false}
      trigger={({ isOpen }) => (
        <div className={`${styles.box} row align-center cursor`} aria-checked={ariaChecked()}>
          <p>
            <small>{data.name}</small>
          </p>

          <ExpandMoreRoundedIcon aria-checked={!isOpen} />
        </div>
      )}
    >
      <div className={`column ${styles.group}`}>
        <h5 className={styles.padding}>{data.name}</h5>

        <div className={`column gap-md`}>{RenderContent()}</div>

        <div className={styles.bottom}>
          <Button name="Show" fullWidth size="Sm" type="button" variant="Contained" onClick={handleSubmitFilter} />
        </div>
      </div>
    </Menu8UI>
  )
}

export default FilterOnTable
