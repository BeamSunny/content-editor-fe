// Lib
import React from 'react'

// Images
import IconSVG from '@images/commons/logoDownload'

// Include in project
import { Chip } from '@components/base'
import styles from '../ButtonSection/index.module.scss'

const ChipSection: React.FC = () => {
  return (
    <div className={`column ${styles.gap}`}>
      <h2>Chip</h2>
      <p>
        The <small className={styles.code}>Chip</small> have props name type disabled onClick className style endIcon
        startIcon variant color size and fullWidth.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <Chip label="Test" icon={IconSVG} />
        <Chip label="Test" icon={IconSVG} onClick={() => console.log('CLICK!')} />
        <Chip label="Test" onDelete={() => console.log('DELETE!')} />
      </div>
    </div>
  )
}

export default ChipSection
