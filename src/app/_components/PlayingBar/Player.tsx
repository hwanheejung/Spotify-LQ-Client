'use client'

import { Tooltip } from '@/components/tooltip'
import { usePlaybackStore } from '@/lib/stores/playback.store'
import { formatDuration } from '@/lib/utils/format-duration'
import { ChangeEvent } from 'react'
import { FaBackwardStep, FaForwardStep } from 'react-icons/fa6'
import { HiMiniPause, HiMiniPlay } from 'react-icons/hi2'

const PausePlayButton = () => {
  const { player, isPaused } = usePlaybackStore()
  return (
    <Tooltip label={isPaused ? 'Play' : 'Pause'}>
      <button
        onClick={() => {
          player!.togglePlay()
        }}
        className="flex items-center justify-center rounded-full bg-gray-0 p-1.5 text-gray-900"
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
  const { player } = usePlaybackStore()
  return (
    <button
      onClick={() => {
        player!.previousTrack()
      }}
      className="text-gray-200 hover:text-gray-0"
    >
      <Tooltip label="Previous" spacing={16}>
        <FaBackwardStep size="1.3rem" />
      </Tooltip>
    </button>
  )
}
const NextButton = () => {
  const { player } = usePlaybackStore()
  return (
    <button
      onClick={() => {
        player!.nextTrack()
      }}
      className="text-gray-200 hover:text-gray-0"
    >
      <Tooltip label="Next" spacing={16}>
        <FaForwardStep size="1.3rem" />
      </Tooltip>
    </button>
  )
}

const SeekBar = () => {
  const { player, currentTrack } = usePlaybackStore()
  if (!currentTrack) return null

  const { duration, position } = currentTrack

  const handleSeek = async (event: ChangeEvent<HTMLInputElement>) => {
    const newPosition = parseInt(event.target.value, 10)

    await player!.seek(newPosition)
  }

  return (
    <div className="flex items-center gap-3">
      <span className="w-8 text-right text-xxs text-gray-200">
        {formatDuration(position)}
      </span>
      <input
        type="range"
        min="0"
        max={duration}
        value={position}
        onChange={handleSeek}
        className="h-1.5 flex-1 cursor-pointer appearance-none rounded-md bg-gray-300"
        style={{
          background: `linear-gradient(to right, #f9fafb ${(position / duration) * 100}%, #535353 ${(position / duration) * 100}%)`,
        }}
      />
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 0;
          width: 0;
        }

        input[type='range']::-moz-range-thumb {
          height: 0;
          width: 0;
        }

        input[type='range']::-ms-thumb {
          height: 0;
          width: 0;
        }

        input[type='range']::-webkit-slider-runnable-track {
          background-color: transparent;
        }
      `}</style>
      <span className="8 text-xxs text-gray-200">
        {formatDuration(duration)}
      </span>
    </div>
  )
}

const Player = () => {
  const { player } = usePlaybackStore()
  if (!player) return <div />

  return (
    <div className="flex flex-col justify-center gap-3">
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
