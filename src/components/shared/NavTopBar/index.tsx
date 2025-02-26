// Lib
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import i18next from 'i18next'

// Images
import LightModeIcon from '@images/commons/sun'
import DarkModeIcon from '@images/commons/moon'

// Include in project
import type { RootState } from '@states/store'
import { setTheam } from '@states/slice/theme'
import styles from './index.module.scss'

const NavTopBar: React.FC = () => {
  const { t } = i18next
  const theme = useSelector((state: RootState) => state.theme.theme)
  const dispatch = useDispatch()

  return (
    <div className={`row align-center justify-center ${styles.box}`}>
      <h1 className="text-center">{t<string>('componentBase')}</h1>

      {theme === 'LIGHT' ? (
        <LightModeIcon className="cursor" onClick={() => dispatch(setTheam({ theme: 'DARK' }))} />
      ) : (
        <DarkModeIcon
          className="cursor"
          style={{ color: 'var(--color-black-1)' }}
          onClick={() => dispatch(setTheam({ theme: 'LIGHT' }))}
        />
      )}
    </div>
  )
}

export default NavTopBar
