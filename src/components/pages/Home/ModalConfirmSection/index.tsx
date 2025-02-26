// Lib
import React from 'react'
import { useDispatch } from 'react-redux'

// Images

// Include in project
import { Button } from '@components/base'
import { setOpenModalConfirm, setCloseModalConfirm } from '@states/slice/modalConfirm'
import styles from '../ButtonSection/index.module.scss'

const ModalConfirmSection: React.FC = () => {
  const dispatch = useDispatch()

  const handleSave = () => {
    console.log('SAVE!!!!')
    dispatch(setCloseModalConfirm())
  }

  return (
    <div className={`column ${styles.gap}`}>
      <h2>ModalConfirm</h2>
      <p>
        The <small className={styles.code}>ModalConfirm</small> control by redux modalConfirm slice.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <Button
          name="Open Modal Confirm"
          variant="Outlined"
          onClick={() =>
            dispatch(
              setOpenModalConfirm({
                title: 'Delete Account',
                description: 'Are you sure you want to delete your account?',
                nextFunction: handleSave,
              }),
            )
          }
        />
      </div>
    </div>
  )
}

export default ModalConfirmSection
