'use client'

import {
  CSSProperties,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

export type Placement =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end'
  | 'left-start'
  | 'left'
  | 'left-end'

export interface TooltipProps {
  label: string
  placement?: Placement
  isDisabled?: boolean
  distance?: number
}

const DEFAULT: Required<Omit<TooltipProps, 'label'>> = {
  placement: 'top',
  isDisabled: false,
  distance: 6,
}

const useTooltip = ({
  placement = DEFAULT.placement,
  isDisabled = DEFAULT.isDisabled,
  distance = DEFAULT.distance,
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLElement | null>(null)
  const tooltipRef = useRef<HTMLDivElement | null>(null)

  const openTooltip = useCallback(() => {
    if (!isDisabled) setIsOpen(true)
  }, [isDisabled])

  const closeTooltip = useCallback(() => {
    setIsOpen(false)
  }, [])

  const calculatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return {}

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const tooltipRect = tooltipRef.current.getBoundingClientRect()

    const offsets: Record<Placement, CSSProperties> = {
      'top-start': {
        top: triggerRect.top - tooltipRect.height - distance,
        left: triggerRect.left,
      },
      top: {
        top: triggerRect.top - tooltipRect.height - distance,
        left: triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2,
      },
      'top-end': {
        top: triggerRect.top - tooltipRect.height - distance,
        left: triggerRect.right - tooltipRect.width,
      },
      'bottom-start': {
        top: triggerRect.bottom + distance,
        left: triggerRect.left,
      },
      bottom: {
        top: triggerRect.bottom + distance,
        left: triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2,
      },
      'bottom-end': {
        top: triggerRect.bottom + distance,
        left: triggerRect.right - tooltipRect.width,
      },
      'left-start': {
        top: triggerRect.top,
        left: triggerRect.left - tooltipRect.width - distance,
      },
      left: {
        top: triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2,
        left: triggerRect.left - tooltipRect.width - distance,
      },
      'left-end': {
        top: triggerRect.bottom - tooltipRect.height,
        left: triggerRect.left - tooltipRect.width - distance,
      },
      'right-start': {
        top: triggerRect.top,
        left: triggerRect.right + distance,
      },
      right: {
        top: triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2,
        left: triggerRect.right + distance,
      },
      'right-end': {
        top: triggerRect.bottom - tooltipRect.height,
        left: triggerRect.right + distance,
      },
    }

    return offsets[placement]
  }, [placement, distance])

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

  const getTooltipProps = () => {
    const style = calculatePosition()

    return {
      ref: tooltipRef,
      role: 'tooltip',
      id: 'tooltip',
      style: {
        position: 'absolute',
        zIndex: 1000,
        pointerEvents: 'none',
        visibility: isOpen ? 'visible' : 'hidden',
        ...style,
      },
    }
  }

  useEffect(() => {
    if (isDisabled) setIsOpen(false)
  }, [isDisabled])

  return {
    isOpen,
    getTriggerProps,
    getTooltipProps,
    openTooltip,
    closeTooltip,
  }
}

export default useTooltip
