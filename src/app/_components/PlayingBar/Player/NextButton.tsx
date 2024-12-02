'use client'

import { Tooltip } from '@/components/tooltip'
import { usePlaybackStore } from '@/lib/stores/playback.store'
import { FaForwardStep } from 'react-icons/fa6'

const NextButton = () => {
  const { player, currentTrack } = usePlaybackStore()

  const isDisabled = !player || !currentTrack

  const handleClick = () => {
    if (!player) return
    player.nextTrack()
  }

  return (
    <Tooltip
      label={!isDisabled ? 'Next' : ''}
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
        <FaForwardStep size="1.3rem" />
      </button>
    </Tooltip>
  )
}

export default NextButton
