// Lib
import React from 'react'
import { Menu as Menu8UI } from '@datability/8ui'

// Images

// Include in project
import Button from 'components/base/Button'

export type TMenu = {
  label: string
  onClick: () => void
}

type Props = {
  name: string
  menuList: TMenu[]
}

const Menu: React.FC<Props> = ({ name, menuList }) => {
  return (
    <Menu8UI trigger={() => <Button name={name} fullWidth />}>
      {menuList.map((data, index) => {
        return (
          <p
            key={index}
            className={`cursor menu-item width-100`}
            onClick={() => {
              data.onClick()
            }}
          >
            <small>{data.label}</small>
          </p>
        )
      })}
    </Menu8UI>
  )
}

export default Menu
