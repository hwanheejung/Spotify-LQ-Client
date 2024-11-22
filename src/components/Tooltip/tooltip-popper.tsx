import { motion } from 'framer-motion'
import { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import { tooltipVariants } from './transition'
import { TooltipOptions } from './types'
import useTooltipPosition from './use-tooltip-position'

export interface TooltipPopperProps extends Required<TooltipOptions> {
  isOpen: boolean
  triggerRef: React.RefObject<HTMLElement | null>
}

const TooltipPopper = (props: TooltipPopperProps) => {
  const { placement, spacing, triggerRef, label, isOpen } = props

  const { style, calculatePosition, popperRef } = useTooltipPosition({
    placement,
    spacing,
    triggerRef,
  })

  useLayoutEffect(() => {
    calculatePosition()

    const handleResize = () => calculatePosition()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [calculatePosition])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <motion.div
      ref={popperRef}
      className="absolute rounded bg-gray-400 px-2 py-1 text-xs text-gray-0"
      variants={tooltipVariants}
      initial="initial"
      animate={isOpen ? 'animate' : 'exit'}
      exit="exit"
      style={{ ...style, zIndex: 1000 }}
    >
      {label}
    </motion.div>,
    document.body,
  )
}

export default TooltipPopper
