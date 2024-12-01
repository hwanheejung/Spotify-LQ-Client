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
    <button
      disabled={isDisabled}
      onClick={handleClick}
      className={`text-gray-200 ${
        !isDisabled ? 'hover:text-gray-0' : 'cursor-not-allowed'
      }`}
    >
      {player && currentTrack ? (
        <Tooltip label="Previous" spacing={16}>
          <FaBackwardStep size="1.3rem" />
        </Tooltip>
      ) : (
        <FaBackwardStep size="1.3rem" />
      )}
    </button>
  )
}

export default PreviousButton
