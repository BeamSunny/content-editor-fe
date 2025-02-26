// Lib
import React from 'react'
import { Chip as Chip8UI, PropsChip } from '@datability/8ui'

// Images

// Include in project
import styles from './index.module.scss'

type Props = {
  color?: 'Basic'
} & PropsChip

const Chip: React.FC<Props> = ({ label, className, icon, onClick, onDelete, style, color = 'Basic' }) => {
  return (
    <Chip8UI
      label={label}
      className={`${className} ${styles[`chip${color}`]}`}
      icon={icon}
      onClick={onClick}
      onDelete={onDelete}
      style={style}
    />
  )
}

export default Chip
