'use client'

import usePopper, { Placement } from '@/lib/hooks/usePopper'
import { MouseEvent, useCallback, useState } from 'react'

export interface TooltipProps {
  label: string
  placement?: Placement
  spacing?: number
}

const useTooltip = (props: TooltipProps) => {
  const { placement = 'top', spacing = 6 } = props

  const { triggerRef, popperRef, styles } = usePopper({ placement, spacing })
  const [isOpen, setIsOpen] = useState(false)

  const openTooltip = useCallback(() => setIsOpen(true), [])
  const closeTooltip = useCallback(() => setIsOpen(false), [])

  const getTriggerProps = () => ({
    ref: triggerRef,
    onMouseEnter: openTooltip,
    onMouseLeave: closeTooltip,
    onFocus: openTooltip,
    onBlur: closeTooltip,
    onClick: (event: MouseEvent) => {
      event.stopPropagation()
      closeTooltip()
    },
    'aria-describedby': isOpen ? 'tooltip' : undefined,
  })

  const getTooltipProps = () => ({
    ref: popperRef,
    role: 'tooltip',
    id: 'tooltip',
    style: {
      ...styles,
      zIndex: 1000,
      pointerEvents: 'none',
      visibility: isOpen ? 'visible' : 'hidden',
    },
  })

  return {
    isOpen,
    getTriggerProps,
    getTooltipProps,
    openTooltip,
    closeTooltip,
  }
}

export default useTooltip
