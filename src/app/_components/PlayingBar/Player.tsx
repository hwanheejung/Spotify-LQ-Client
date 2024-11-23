import { usePlaybackStore } from '@/lib/stores/playback.store'

const Player = () => {
  const { player, isPaused } = usePlaybackStore()
  if (!player) return null
  return (
    <div>
      <button
        onClick={() => {
          player.previousTrack()
        }}
      >
        &lt;&lt;
      </button>

      <button
        onClick={() => {
          player.togglePlay()
        }}
      >
        {isPaused ? 'PLAY' : 'PAUSE'}
      </button>

      <button
        onClick={() => {
          player.nextTrack()
        }}
      >
        &gt;&gt;
      </button>
    </div>
  )
}

export default Player
