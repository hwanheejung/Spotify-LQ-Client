'use client'

import { Tooltip } from '@/components/tooltip'
import { usePlaybackStore } from '@/lib/stores/playback.store'
import { FaBackwardStep } from 'react-icons/fa6'

const PreviousButton = () => {
  const { player, currentTrack } = usePlaybackStore()

  const isDisabled = !player || !currentTrack

  const handleClick = () => {
    if (!player) return
    player.previousTrack()
  }

  return (
    <Tooltip
      label={!isDisabled ? 'Previous' : ''}
      spacing={16}
      className="flex items-center"
    >
      <button
        disabled={isDisabled}
        onClick={handleClick}
        className={`text-gray-200 ${
          !isDisabled ? 'hover:text-gray-0' : 'cursor-not-allowed'
        }`}
      >
        <FaBackwardStep size="1.3rem" />
      </button>
    </Tooltip>
  )
}

export default PreviousButton
