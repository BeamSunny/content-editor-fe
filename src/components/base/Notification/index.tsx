// Lib
import React, { useState } from 'react'
import { SnackbarKey, useSnackbar } from 'notistack'
import XSVG from '@images/commons/x'

type Props = {
  title: 'Error' | 'Success' | 'Warning' | 'Info'
  description: string
}

const Notification: React.FC<Props> = ({ title, description }): JSX.Element => {
  const [hidden, setHidden] = useState(true)
  const isCheckLongDescription = description.length > 100

  if (title === 'Error' && isCheckLongDescription) {
    return (
      <div>
        <h4>{title}</h4>
        <p>
          Internal Server Error{' '}
          <span className="link aria-hidden" onClick={() => setHidden(false)} aria-hidden={!hidden}>
            Show more
          </span>{' '}
          <br />
          <span className="aria-hidden" aria-hidden={hidden}>
            {description}
          </span>
        </p>
      </div>
    )
  }

  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Notification

export const SnackbarCloseButton = ({ snackbarKey }: { snackbarKey: SnackbarKey }) => {
  const { closeSnackbar } = useSnackbar()

  return <XSVG className="cursor" onClick={() => closeSnackbar(snackbarKey)} />
}
