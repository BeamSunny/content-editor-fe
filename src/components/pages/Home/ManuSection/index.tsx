// Lib
import React from 'react'

// Images

// Include in project
import { Menu } from '@components/base'
import styles from '../ButtonSection/index.module.scss'

const ManuSection: React.FC = () => {
  return (
    <div className={`column ${styles.gap}`}>
      <h2>Manu</h2>
      <p>
        The <small className={styles.code}>Manu</small> have props name, fullWidth and manuList.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <Menu
          name="Click Me!"
          menuList={[
            {
              label: 'Export',
              onClick: () => console.log('Click Export!'),
            },
          ]}
        />
      </div>
    </div>
  )
}

export default ManuSection
