'use client'

import NextButton from './NextButton'
import PausePlayButton from './PausePlayButton'
import PreviousButton from './PreviousButton'
import SeekBar from './SeekBar'

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
