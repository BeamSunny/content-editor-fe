// Lib
import React from 'react'
import i18next from 'i18next'

// Include in project
import styles from './index.module.scss'

type Props = {
  filter: string
  onChange: (data: string) => void
}

const NavTopBar: React.FC<Props> = ({ filter, onChange }) => {
  const { t } = i18next

  const buttonList = [
    { label: 'ปกติ  (Normal)', value: 'normal' },
    { label: 'Deuteranopia (ตาบอดสีเขียว)', value: 'deuteranopia' },
    { label: 'Protanopia (ตาบอดสีแดง)', value: 'protanopia' },
    { label: 'Tritanopia (ตาบอดสีน้ำเงิน)', value: 'tritanopia' },
  ]

  return (
    <div className={`row align-center  ${styles.box}`}>
      <div className={`row align-center justify-space-between gap-lg ${styles.wrapper}`}>
        <h2>Editor Js</h2>

        <div className="row gap-md">
          {buttonList?.map((ele, index) => (
            <button key={index} className={`cursor ${styles.button}`} onClick={() => onChange(ele.value)}>
              {ele.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavTopBar
