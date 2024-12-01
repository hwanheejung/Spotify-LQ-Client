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
    <button
      disabled={isDisabled}
      onClick={handleClick}
      className={`text-gray-200 ${
        !isDisabled ? 'hover:text-gray-0' : 'cursor-not-allowed'
      }`}
    >
      {player && currentTrack ? (
        <Tooltip label="Next" spacing={16}>
          <FaForwardStep size="1.3rem" />
        </Tooltip>
      ) : (
        <FaForwardStep size="1.3rem" />
      )}
    </button>
  )
}

export default NextButton
