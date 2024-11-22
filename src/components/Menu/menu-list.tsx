'use client'

import { HTMLAttributes } from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import { useMenuStore } from './store'

type MenuListProps = HTMLAttributes<HTMLDivElement>

const MenuList = ({ children }: MenuListProps) => {
  const { menuRef, isOpen, styles } = useMenuStore()

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <motion.div
      ref={menuRef}
      className="absolute w-fit rounded-md bg-gray-400 p-1 text-gray-0"
      role="menu"
      id="menu"
      initial="initial"
      animate={isOpen ? 'animate' : 'exit'}
      exit="exit"
      style={{ ...styles }}
    >
      {children}
    </motion.div>,
    document.body,
  )
}

export default MenuList
