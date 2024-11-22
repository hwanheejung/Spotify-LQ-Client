'use client'

import { ReactNode, useCallback, useRef, useState } from 'react'
import TooltipPopper from './tooltip-popper'
import { TooltipOptions } from './types'

export interface TooltipProps extends TooltipOptions {
  children: ReactNode
}

const Tooltip = (props: TooltipProps) => {
  const { children, label, placement = 'top', spacing = 6 } = props

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const triggerRef = useRef<HTMLElement | null>(null)

  const openTooltip = useCallback(() => setIsOpen(true), [])
  const closeTooltip = useCallback(() => setIsOpen(false), [])

  return (
    <div className="relative w-fit">
      <span
        ref={triggerRef}
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        onFocus={openTooltip}
        onBlur={closeTooltip}
      >
        {children}
      </span>

      <TooltipPopper
        isOpen={isOpen}
        label={label}
        placement={placement}
        spacing={spacing}
        triggerRef={triggerRef}
      />
    </div>
  )
}

export default Tooltip
