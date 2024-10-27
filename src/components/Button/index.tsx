import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tooltip: string
  available?: boolean
  selected?: boolean
  children: ReactNode
}

const Button = ({
  selected = false,
  available = true,
  children,
  ...props
}: ButtonProps) => {
  const color = () => {
    if (!available) return 'opacity-40 hover:opacity-50'
    if (selected) return 'text-spotifyGreen'

    return 'text-gray-200 hover:text-gray-0'
  }

  return (
    <button {...props} className={twMerge(color(), 'px-1.5 py-2')}>
      {children}
    </button>
  )
}

interface IconProps {
  icon: ReactNode
}
const Icon = ({ icon }: IconProps) => {
  return <div>{icon}</div>
}

Button.Icon = Icon
export default Button
