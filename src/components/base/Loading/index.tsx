// Lib
import React from 'react'
import { useSelector } from 'react-redux'
import { Blackdrop } from '@datability/8ui'

// Images

// Include in project
import type { RootState } from '@states/store'
import styles from './index.module.scss'

const Loading: React.FC = (): JSX.Element => {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading)

  return (
    <Blackdrop open={isLoading}>
      <div className={`row justify-center align-center ${styles.container}`}>
        <span className={styles.loader} />
      </div>
    </Blackdrop>
  )
}

export default Loading
