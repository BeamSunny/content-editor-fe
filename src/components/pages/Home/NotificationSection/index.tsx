// Lib
import React from 'react'
import { useSnackbar } from 'notistack'

// Images

// Include in project
import { Button, Notification } from '@components/base'
import styles from '../ButtonSection/index.module.scss'

const NotificationSection: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar()

  return (
    <div className={`column ${styles.gap}`}>
      <h2>Notification</h2>
      <p>
        The <small className={styles.code}>Notification</small> have props title, description and variant.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <Button
          name="Success"
          variant="Outlined"
          onClick={() =>
            enqueueSnackbar(
              <Notification
                title="Success"
                description="The function of the artist in a disturbed society is to give awareness of the universe, to ask the right questions, and to elevate the mind."
              />,
              { variant: 'success' },
            )
          }
        />
        <Button
          name="Error"
          variant="Outlined"
          onClick={() =>
            enqueueSnackbar(
              <Notification
                title="Error"
                description="The function of the artist in a disturbed society is to give awareness of the universe, to ask the right questions, and to elevate the mind."
              />,
              { variant: 'error' },
            )
          }
        />
        <Button
          name="Warning"
          variant="Outlined"
          onClick={() =>
            enqueueSnackbar(
              <Notification
                title="Warning"
                description="The function of the artist in a disturbed society is to give awareness of the universe, to ask the right questions, and to elevate the mind."
              />,
              { variant: 'warning' },
            )
          }
        />
        <Button
          name="Info"
          variant="Outlined"
          onClick={() =>
            enqueueSnackbar(
              <Notification
                title="Info"
                description="The function of the artist in a disturbed society is to give awareness of the universe, to ask the right questions, and to elevate the mind."
              />,
              { variant: 'info' },
            )
          }
        />
      </div>
    </div>
  )
}

export default NotificationSection
