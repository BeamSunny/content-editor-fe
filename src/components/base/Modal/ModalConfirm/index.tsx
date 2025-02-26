// Lib
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal } from '@datability/8ui'

// Include in project
import { Button } from '@components/base'
import { setCloseModalConfirm } from '@states/slice/modalConfirm'
import type { RootState } from '@states/store'
import styles from './index.module.scss'

const ModalConfirm: React.FC = (): JSX.Element => {
  const modalConfirm = useSelector((state: RootState) => state.modalConfirm)
  const dispatch = useDispatch()

  return (
    <Modal id="modalConfirm" size="sm" open={modalConfirm.isOpen} onClose={() => dispatch(setCloseModalConfirm())}>
      <div className={`column justify-center align-center ${styles.container}`}>
        <h4>{modalConfirm.title}</h4>
        <p>{modalConfirm.description}</p>
        <div className={`row ${styles.groupBtn}`}>
          <Button
            name={modalConfirm.titleButtonCancel}
            variant="Outlined"
            color="Secondary"
            onClick={() => dispatch(setCloseModalConfirm())}
          />
          <Button
            name={modalConfirm.titleButtonSave}
            variant="Outlined"
            onClick={() => modalConfirm.nextFunction?.()}
          />
        </div>
      </div>
    </Modal>
  )
}

export default ModalConfirm
