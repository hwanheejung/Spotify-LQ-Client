import { ReactNode } from 'react'

interface MenuProps {
  children: ReactNode
}

const Menu = ({ children }: MenuProps) => {
  return <div className="">{children}</div>
}

Menu.displayName = 'Menu'

export default Menu
