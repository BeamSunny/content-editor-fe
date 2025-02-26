// Lib
import React from 'react'
import { useDispatch } from 'react-redux'

// Images

// Include in project
import { Button } from '@components/base'
import { setOpenLoading } from '@states/slice/loading'
import styles from '../ButtonSection/index.module.scss'

const LoadingSection: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <div className={`column ${styles.gap}`}>
      <h2>Loading</h2>
      <p>
        The <small className={styles.code}>Loading</small> control by redux loading slice.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <Button name="Open Loading" variant="Outlined" onClick={() => dispatch(setOpenLoading())} />
      </div>
    </div>
  )
}

export default LoadingSection
