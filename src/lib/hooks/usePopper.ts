import {
  CSSProperties,
  useCallback,
  useLayoutEffect,
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

interface UsePopperOptions {
  placement: Placement
  spacing?: number
  preventOverflow?: boolean
}

const usePopper = (options: UsePopperOptions) => {
  const { placement, spacing = 6 } = options

  const triggerRef = useRef<HTMLElement | null>(null)
  const popperRef = useRef<HTMLDivElement | null>(null)
  const [styles, setStyles] = useState<CSSProperties>({})

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

    const calculatedStyle = {
      position: 'absolute',
      ...offsets[placement],
    } as CSSProperties

    setStyles(calculatedStyle)
  }, [placement, spacing])

  useLayoutEffect(() => {
    calculatePosition()
    window.addEventListener('resize', calculatePosition)
    window.addEventListener('scroll', calculatePosition)

    return () => {
      window.removeEventListener('resize', calculatePosition)
      window.removeEventListener('scroll', calculatePosition)
    }
  }, [calculatePosition])

  return {
    triggerRef,
    popperRef,
    styles,
  }
}

export default usePopper
