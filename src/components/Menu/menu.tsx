'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { useMenuStore } from './store'
import { MenuOptions } from './types'
import useMenuPosition from './use-position'

interface MenuProps extends MenuOptions {
  children: ReactNode
}

const Menu = ({
  placement = 'bottom-start',
  spacing = 6,
  children,
}: MenuProps) => {
  const triggerRef = useRef<HTMLElement | null>(null)
  const { setTriggerRef, setMenuRef, setStyles, isOpen } = useMenuStore()

  const { styles, popperRef } = useMenuPosition({
    triggerRef,
    placement,
    spacing,
    isOpen,
  })

  useEffect(() => {
    setTriggerRef(triggerRef)
    setMenuRef(popperRef)
    setStyles(styles)
  }, [isOpen, popperRef, setMenuRef, setStyles, setTriggerRef, styles])

  return <div className="relative">{children}</div>
}

Menu.displayName = 'Menu'

export default Menu
