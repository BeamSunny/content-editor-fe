// Lib
import React from 'react'
import { Divider } from '@datability/8ui'

// Images

// Include in project
import styles from '../ButtonSection/index.module.scss'

const DividerSection: React.FC = () => {
  return (
    <div className={`column ${styles.gap}`}>
      <h2>Divider</h2>
      <p>
        The <small className={styles.code}>Divider</small> have not props.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <Divider />
      </div>
    </div>
  )
}

export default DividerSection
