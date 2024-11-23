import { MotionProps, motion } from 'framer-motion'
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { createPulseVariants } from './transition'
import { SkeletonOptions } from './types'

export type SkeletonProps = SkeletonOptions &
  MotionProps &
  HTMLAttributes<HTMLDivElement>

const Skeleton = (props: SkeletonProps) => {
  const {
    startColor = '#EDF2F7',
    endColor = '#525a64',
    isLoaded = true,
    speed = 2,
    fitContent = false,
    children,
    ...rest
  } = props

  const pulseVariants = createPulseVariants(speed, startColor, endColor)

  if (isLoaded) return children
  return (
    <motion.div
      className={twMerge(
        'pointer-events-none select-none rounded-md',
        fitContent ? 'w-fit' : '',
      )}
      style={{
        background: `linear-gradient(90deg, ${startColor}, ${endColor}, ${startColor})`,
        backgroundSize: '200% 100%',
      }}
      variants={pulseVariants}
      initial="initial"
      animate="pulse"
      {...rest}
    >
      <div className="opacity-0">{children}</div>
    </motion.div>
  )
}

export default Skeleton

Skeleton.displayName = 'Skeleton'
