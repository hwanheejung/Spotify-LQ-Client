import { Tooltip } from '@/components/tooltip'
import { PlaybackState, usePlaybackStore } from '@/lib/stores/playback.store'
import { HiMiniPause, HiMiniPlay } from 'react-icons/hi2'
import { FaBackwardStep, FaForwardStep } from 'react-icons/fa6'

const PausePlayButton = ({
  player,
  isPaused,
  isActive,
}: Required<Pick<PlaybackState, 'player' | 'isPaused' | 'isActive'>>) => {
  return (
    <Tooltip label={isPaused ? 'Play' : 'Pause'}>
      <button
        onClick={() => {
          if (!isActive) {
            console.log('Activating player...')
            player.activateElement()
          }
          player.togglePlay()
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

const PreviousButton = ({
  player,
}: Required<Pick<PlaybackState, 'player'>>) => {
  return (
    <button
      onClick={() => {
        player.previousTrack()
      }}
      className="text-gray-200 hover:text-gray-0"
    >
      <Tooltip label="Previous" spacing={16}>
        <FaBackwardStep size="1.3rem" />
      </Tooltip>
    </button>
  )
}
const NextButton = ({ player }: Required<Pick<PlaybackState, 'player'>>) => {
  return (
    <button
      onClick={() => {
        player.nextTrack()
      }}
      className="text-gray-200 hover:text-gray-0"
    >
      <Tooltip label="Next" spacing={16}>
        <FaForwardStep size="1.3rem" />
      </Tooltip>
    </button>
  )
}

const Progress = () => {
  return <div className="h-1.5 rounded-md bg-gray-0" />
}

const Player = () => {
  const { player, isPaused, isActive } = usePlaybackStore()
  if (!player) return null

  return (
    <div className="flex flex-col justify-center gap-3">
      <div className="flex items-center justify-center gap-6">
        <PreviousButton player={player} />
        <PausePlayButton
          player={player}
          isPaused={isPaused}
          isActive={isActive}
        />
        <NextButton player={player} />
      </div>
      <Progress />
    </div>
  )
}

export default Player
