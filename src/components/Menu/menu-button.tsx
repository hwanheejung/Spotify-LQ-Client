import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { useMenuStore } from './store'

interface MenuButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
  as: ElementType
}

const MenuButton = (props: MenuButtonProps) => {
  const { children, as: Component = 'button', ...rest } = props
  const { toggleMenu } = useMenuStore()

  return (
    <Component onClick={toggleMenu} {...rest}>
      {children}
    </Component>
  )
}

export default MenuButton
