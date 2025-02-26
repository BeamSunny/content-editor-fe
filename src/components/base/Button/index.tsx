// Lib
import React from 'react'
import { Button as Button8UI, PropsButton } from '@datability/8ui'

// Images

// Include in project
import styles from './index.module.scss'

type Props = {
  variant?: 'Contained' | 'Outlined'
  color?: 'Primary' | 'Secondary'
  size?: 'Sm' | 'Md' | 'Lg'
  fullWidth?: boolean
} & PropsButton

const Button: React.FC<Props> = ({
  name,
  type = 'button',
  disabled = false,
  onClick,
  className,
  style,
  endIcon,
  startIcon,
  variant = 'Contained',
  color = 'Primary',
  size = 'Sm',
  fullWidth = false,
}) => {
  const styleCustom = {
    ...style,
    width: !fullWidth ? 'fit-content' : '100%',
  }

  return (
    <Button8UI
      name={name}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${className ? className : ''} ${styles[`button${size}${variant}${color}`]}`}
      style={styleCustom}
      endIcon={endIcon}
      startIcon={startIcon}
    />
  )
}

export default Button
