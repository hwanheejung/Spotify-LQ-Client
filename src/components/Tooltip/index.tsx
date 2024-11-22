'use client'

import { ReactNode } from 'react'
import { MotionStyle, motion } from 'framer-motion'
import ReactDOM from 'react-dom'
import useTooltip, { TooltipProps } from './use-tooltip'
import { tooltipVariants } from './tooltip.transition'

const Tooltip = ({
  children,
  label,
  placement,
  isDisabled,
  spacing,
}: TooltipProps & { children: ReactNode }) => {
  const { isOpen, getTriggerProps, getTooltipProps } = useTooltip({
    label,
    placement,
    isDisabled,
    spacing,
  })

  return (
    <div className="relative w-fit">
      <span {...getTriggerProps()}>{children}</span>

      {ReactDOM.createPortal(
        <motion.div
          className="rounded bg-gray-400 px-2 py-1 text-xs text-gray-0"
          {...getTooltipProps()}
          variants={tooltipVariants}
          initial="initial"
          animate={isOpen ? 'animate' : 'exit'}
          exit="exit"
          style={{
            ...(getTooltipProps().style as MotionStyle),
          }}
        >
          {label}
        </motion.div>,
        document.body,
      )}
    </div>
  )
}

Tooltip.displayName = 'Tooltip'

export default Tooltip
