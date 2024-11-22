import { HTMLAttributes } from 'react'
// import { useMenuStore } from './store'

type MenuListProps = HTMLAttributes<HTMLDivElement>

const MenuList = ({ children }: MenuListProps) => {
  // const { isOpen } = useMenuStore()
  return (
    <div className="rounded-md bg-gray-400 p-1 text-gray-0">{children}</div>
  )
}

export default MenuList
