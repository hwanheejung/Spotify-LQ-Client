import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type DividerProps = HTMLAttributes<HTMLDivElement>

const Divider = ({ className, ...props }: DividerProps) => (
  <div
    aria-orientation="horizontal"
    className={twMerge('h-px w-full bg-gray-200', className)}
    {...props}
  />
)

export default Divider
