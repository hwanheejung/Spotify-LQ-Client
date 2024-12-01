import { useState } from 'react'

type Level = {
  name: 'Easy' | 'Medium' | 'Hard'
  description: string
}

const levels: Level[] = [
  {
    name: 'Easy',
    description: 'Only some words are blanked out.',
  },
  { name: 'Medium', description: 'More blanks to challenge your skills.' },
  {
    name: 'Hard',
    description: 'All words are blanked out. no hints provided.',
  },
]

interface LevelButtonProps {
  currentLevel: Level
  level: Level
  setLevel: (level: Level) => void
}

const LevelButton = ({ currentLevel, level, setLevel }: LevelButtonProps) => {
  return (
    <button
      onClick={() => setLevel(level)}
      className="flex items-center justify-between gap-1"
    >
      <div className="flex flex-1 flex-col items-start text-start">
        <span className="">{level.name}</span>
        <p className="text-xs text-gray-100">{level.description}</p>
      </div>
      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${currentLevel.name === level.name ? 'border-spotifyGreen' : 'border-gray-300'} `}
      >
        <div
          className={`h-2 w-2 rounded-full ${currentLevel.name === level.name && 'bg-spotifyGreen'}`}
        />
      </div>
    </button>
  )
}

const Quiz = () => {
  const [level, setLevel] = useState<Level>(levels[0])

  return (
    <div className="flex flex-col gap-3 rounded-md bg-gray-400 p-3">
      <h3 className="font-bold">Fill in the blank quiz!</h3>

      <div className="flex flex-col gap-2">
        {levels.map((lvl) => (
          <LevelButton
            key={lvl.name}
            level={lvl}
            setLevel={setLevel}
            currentLevel={level}
          />
        ))}
      </div>

      <button
        onClick={() => console.log('Start quiz', level)}
        className="rounded-md bg-spotifyGreen px-4 py-2 font-bold text-gray-900 transition-all hover:scale-105 focus:outline-none"
      >
        Start
      </button>
    </div>
  )
}

export default Quiz
