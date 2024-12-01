import { motion } from 'framer-motion'
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type MusicBarsProps = HTMLAttributes<HTMLDivElement>

const MusicBars = ({ className, ...rest }: MusicBarsProps) => {
  const barScales = [
    [0.2, 0.5, 1, 0.2],
    [0.7, 1, 0.2, 0.7],
    [1, 0.2, 0.5, 1],
    [0.5, 1, 0.2, 0.5],
  ]

  return (
    <div {...rest} className={twMerge('flex items-end gap-[1.5px]', className)}>
      {barScales.map((scalePattern, index) => (
        <motion.div
          key={index}
          className="h-3.5 w-[2.5px] origin-bottom bg-spotifyGreen"
          initial={{ scaleY: scalePattern[0] }}
          animate={{
            scaleY: scalePattern,
            transition: {
              duration: 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.1,
            },
          }}
        />
      ))}
    </div>
  )
}

export default MusicBars
