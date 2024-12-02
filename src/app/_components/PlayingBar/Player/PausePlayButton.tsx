'use client'

import { Tooltip } from '@/components/tooltip'
import { usePlaybackStore } from '@/lib/stores/playback.store'
import { useMemo } from 'react'
import { HiMiniPause, HiMiniPlay } from 'react-icons/hi2'
import { twMerge } from 'tailwind-merge'

const PausePlayButton = () => {
  const { player, isPaused, currentTrack } = usePlaybackStore()

  const label = useMemo(() => {
    if (!player || !currentTrack) return ''

    return isPaused ? 'Play' : 'Pause'
  }, [player, currentTrack, isPaused])

  const isDisabled = !player || !currentTrack

  const handleClick = () => {
    if (!player) return
    player.togglePlay()
  }

  return (
    <Tooltip label={label}>
      <button
        disabled={isDisabled}
        onClick={handleClick}
        className={twMerge(
          'flex items-center justify-center rounded-full bg-gray-0 p-1.5 text-gray-900',
          isDisabled && 'cursor-not-allowed opacity-50',
        )}
      >
        {isPaused ? (
          <HiMiniPlay size="1.5rem" className="pl-[2px]" />
        ) : (
          <HiMiniPause size="1.5rem" />
        )}
      </button>
    </Tooltip>
  )
}

export default PausePlayButton
