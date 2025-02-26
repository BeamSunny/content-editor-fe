// Lib
import React from 'react'

// Images

// Include in project
import { NavTopBar } from '@components/shared'
import styles from './index.module.scss'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.gridLayout}>
      <div className={styles.gridNavTop}>
        <NavTopBar />
      </div>
      <div className={styles.gridData}>{children}</div>
    </div>
  )
}

export default Layout
