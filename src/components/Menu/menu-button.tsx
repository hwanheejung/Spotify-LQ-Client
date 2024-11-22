import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { useMenuStore } from './store'

interface MenuButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
  as: ElementType
}

const MenuButton = (props: MenuButtonProps) => {
  const { children, as: Component = 'button', ...rest } = props
  const { toggleMenu, triggerRef, isOpen, closeMenu } = useMenuStore()

  return (
    <Component
      ref={triggerRef}
      onClick={toggleMenu}
      onBlur={closeMenu}
      aria-haspopup
      aria-expanded={isOpen}
      aria-describedby={isOpen ? 'menu' : undefined}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default MenuButton
