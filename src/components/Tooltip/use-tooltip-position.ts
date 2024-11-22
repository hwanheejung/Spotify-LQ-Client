import { Placement } from '@/lib/hooks/usePopper'
import { MotionStyle } from 'framer-motion'
import { CSSProperties, useCallback, useRef, useState } from 'react'
import { TooltipOptions } from './types'

interface UseTooltipPositionProps
  extends Required<Omit<TooltipOptions, 'label'>> {
  triggerRef: React.RefObject<HTMLElement | null>
}

const useTooltipPosition = (props: UseTooltipPositionProps) => {
  const { placement, spacing, triggerRef } = props

  const popperRef = useRef<HTMLDivElement | null>(null)
  const [style, setStyle] = useState<MotionStyle>({})

  const calculatePosition = useCallback(() => {
    const trigger = triggerRef.current
    const popper = popperRef.current

    if (!trigger || !popper) return

    const triggerRect = trigger.getBoundingClientRect()
    const popperRect = popper.getBoundingClientRect()

    const offsets: Record<Placement, CSSProperties> = {
      'top-start': {
        top: triggerRect.top - popperRect.height - spacing,
        left: triggerRect.left,
      },
      top: {
        top: triggerRect.top - popperRect.height - spacing,
        left: triggerRect.left + triggerRect.width / 2 - popperRect.width / 2,
      },
      'top-end': {
        top: triggerRect.top - popperRect.height - spacing,
        left: triggerRect.right - popperRect.width,
      },
      'bottom-start': {
        top: triggerRect.bottom + spacing,
        left: triggerRect.left,
      },
      bottom: {
        top: triggerRect.bottom + spacing,
        left: triggerRect.left + triggerRect.width / 2 - popperRect.width / 2,
      },
      'bottom-end': {
        top: triggerRect.bottom + spacing,
        left: triggerRect.right - popperRect.width,
      },
      'left-start': {
        top: triggerRect.top,
        left: triggerRect.left - popperRect.width - spacing,
      },
      left: {
        top: triggerRect.top + triggerRect.height / 2 - popperRect.height / 2,
        left: triggerRect.left - popperRect.width - spacing,
      },
      'left-end': {
        top: triggerRect.bottom - popperRect.height,
        left: triggerRect.left - popperRect.width - spacing,
      },
      'right-start': {
        top: triggerRect.top,
        left: triggerRect.right + spacing,
      },
      right: {
        top: triggerRect.top + triggerRect.height / 2 - popperRect.height / 2,
        left: triggerRect.right + spacing,
      },
      'right-end': {
        top: triggerRect.bottom - popperRect.height,
        left: triggerRect.right + spacing,
      },
    }

    setStyle(offsets[placement])
  }, [placement, spacing, triggerRef])

  return { style, popperRef, calculatePosition }
}

export default useTooltipPosition
