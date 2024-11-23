'use client'

import { motion } from 'framer-motion'
import { HTMLAttributes } from 'react'
import ReactDOM from 'react-dom'
import { useMenu } from './context'
import { menuVariants } from './transition'

type MenuListProps = HTMLAttributes<HTMLDivElement>

const MenuList = ({ children }: MenuListProps) => {
  const { menuRef, isOpen, styles } = useMenu()

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <motion.div
      ref={menuRef}
      variants={menuVariants}
      className="absolute w-fit min-w-40 rounded-md bg-gray-400 p-1 text-gray-0"
      role="menu"
      id="menu"
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ ...styles }}
    >
      {children}
    </motion.div>,
    document.body,
  )
}

export default MenuList
