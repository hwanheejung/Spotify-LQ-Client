'use client'

import { ReactNode } from 'react'
import { MenuProvider } from './context'
import { MenuOptions } from './types'

interface MenuProps extends MenuOptions {
  children: ReactNode
}

const Menu = ({
  placement = 'bottom-start',
  spacing = 6,
  children,
}: MenuProps) => {
  return (
    <MenuProvider placement={placement} spacing={spacing}>
      <div className="relative">{children}</div>
    </MenuProvider>
  )
}

Menu.displayName = 'Menu'

export default Menu
