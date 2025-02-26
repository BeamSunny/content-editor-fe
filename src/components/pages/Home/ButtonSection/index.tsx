// Lib
import React from 'react'

// Images
import IconSVG from '@images/commons/logoDownload'

// Include in project
import { Button } from '@components/base'
import styles from './index.module.scss'

const ButtonSection: React.FC = () => {
  return (
    <div className={`column ${styles.gap}`}>
      <h2>Button</h2>
      <p>
        The <small className={styles.code}>Button</small> have props name, variant, color, type, size, disabled,
        onClick, StartIcon, EndIcon and fullWidth.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <Button name="Contained" type="submit" />
        <Button name="Contained" disabled startIcon={IconSVG} size="Md" />
        <Button name="Contained" endIcon={IconSVG} size="Lg" />
      </div>
    </div>
  )
}

export default ButtonSection
