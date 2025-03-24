// Lib
import React, { useEffect, useState } from 'react'

// Images

// Include in project
import { NavTopBar } from '@components/shared'
import styles from './index.module.scss'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({ children }) => {
  const [filter, setFilter] = useState('normal')

  useEffect(() => {
    document.body.style.filter = `url(#${filter})`
    return () => {
      document.body.style.filter = 'none'
    }
  }, [filter])

  return (
    <div className={styles.gridLayout}>
      <svg width="0" height="0">
        <defs>
          <filter id="normal">
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          </filter>
          <filter id="deuteranopia">
            <feColorMatrix type="matrix" values="0.625 0.375 0 0 0  0.7 0.3 0 0 0  0 0.3 0.7 0 0  0 0 0 1 0" />
          </filter>
          <filter id="protanopia">
            <feColorMatrix type="matrix" values="0.567 0.433 0 0 0  0.558 0.442 0 0 0  0 0.242 0.758 0 0  0 0 0 1 0" />
          </filter>
          <filter id="tritanopia">
            <feColorMatrix type="matrix" values="0.95 0.05 0 0 0  0 0.433 0.567 0 0  0 0.475 0.525 0 0  0 0 0 1 0" />
          </filter>
          <filter id="achromatopsia">
            <feColorMatrix type="matrix" values="0.3 0.59 0.11 0 0  0.3 0.59 0.11 0 0  0.3 0.59 0.11 0 0  0 0 0 1 0" />
          </filter>
        </defs>
      </svg>

      <div className={styles.gridNavTop}>
        <NavTopBar filter={filter} onChange={(data: string) => setFilter(data)} />
      </div>

      <div className={styles.gridData}>{children}</div>
    </div>
  )
}

export default Layout
