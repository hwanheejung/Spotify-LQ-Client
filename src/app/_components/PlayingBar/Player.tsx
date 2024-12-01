'use client'

import { Tooltip } from '@/components/tooltip'
import { usePlaybackStore } from '@/lib/stores/playback.store'
import { formatDuration } from '@/lib/utils/format-duration'
import { debounce } from 'lodash'
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { FaBackwardStep, FaForwardStep } from 'react-icons/fa6'
import { HiMiniPause, HiMiniPlay } from 'react-icons/hi2'
import { twMerge } from 'tailwind-merge'

const PausePlayButton = () => {
  const { player, isPaused, currentTrack } = usePlaybackStore()

  const label = () => {
    if (!player || !currentTrack) return ''
    if (isPaused) return 'Play'
    return 'Pause'
  }

  return (
    <Tooltip label={label()}>
      <button
        disabled={!player || !currentTrack}
        onClick={() => {
          player!.togglePlay()
        }}
        className={twMerge(
          'flex items-center justify-center rounded-full bg-gray-0 p-1.5 text-gray-900',
          (!player || !currentTrack) && 'cursor-not-allowed opacity-50',
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

const PreviousButton = () => {
  const { player, currentTrack } = usePlaybackStore()

  return (
    <button
      disabled={!player || !currentTrack}
      onClick={() => {
        player!.previousTrack()
      }}
      className={`text-gray-200 ${player && currentTrack ? 'hover:text-gray-0' : 'cursor-not-allowed'} `}
    >
      <Tooltip label={player && currentTrack ? 'Previous' : ''} spacing={16}>
        <FaBackwardStep size="1.3rem" />
      </Tooltip>
    </button>
  )
}
const NextButton = () => {
  const { player, currentTrack } = usePlaybackStore()

  return (
    <button
      disabled={!player || !currentTrack}
      onClick={() => {
        player!.nextTrack()
      }}
      className={`text-gray-200 ${player && currentTrack ? 'hover:text-gray-0' : 'cursor-not-allowed'} `}
    >
      <Tooltip label={player && currentTrack ? 'Next' : ''} spacing={16}>
        <FaForwardStep size="1.3rem" />
      </Tooltip>
    </button>
  )
}

const SeekBar = () => {
  const { player, currentTrack } = usePlaybackStore()
  const [position, setPosition] = useState(0)
  const duration = currentTrack?.duration || 0

  useEffect(() => {
    if (currentTrack?.position !== undefined) setPosition(currentTrack.position)
  }, [currentTrack?.position])

  const debouncedSeek = useMemo(
    () =>
      debounce((newPosition: number) => {
        if (player) player.seek(newPosition)
      }, 300),
    [player],
  )

  useEffect(() => {
    return () => {
      debouncedSeek.cancel()
    }
  }, [debouncedSeek])

  const handleSeek = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newPosition = parseInt(event.target.value, 10)
      setPosition(newPosition)
      debouncedSeek(newPosition)
    },
    [debouncedSeek],
  )

  const formattedPosition = useMemo(() => formatDuration(position), [position])
  const formattedDuration = useMemo(() => formatDuration(duration), [duration])
  const isDisabled = useMemo(() => !player, [player])

  const sliderClass = `range-slider h-1.5 flex-1 cursor-pointer appearance-none rounded-md bg-gray-300 ${
    isDisabled ? 'cursor-not-allowed opacity-80' : ''
  }`

  return (
    <div className="flex items-center gap-3">
      <span className="w-8 text-right text-xxs text-gray-200">
        {formattedPosition}
      </span>
      <input
        type="range"
        min="0"
        max={duration}
        value={position}
        onChange={handleSeek}
        disabled={isDisabled}
        className={sliderClass}
        aria-label="Seek position"
        aria-valuemin={0}
        aria-valuemax={duration}
        aria-valuenow={position}
        aria-disabled={isDisabled}
        style={
          {
            '--progress': `${duration === 0 ? 0 : (position / duration) * 100}%`,
          } as React.CSSProperties
        }
      />
      <span className="w-8 text-xxs text-gray-200">{formattedDuration}</span>
    </div>
  )
}

const Player = () => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex items-center justify-center gap-6">
        <PreviousButton />
        <PausePlayButton />
        <NextButton />
      </div>
      <SeekBar />
    </div>
  )
}

export default Player
