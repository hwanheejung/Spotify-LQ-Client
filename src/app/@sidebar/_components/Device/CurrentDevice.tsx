import { usePlaybackStore } from '@/lib/stores/playback.store'
import { DeviceDTO } from '@/types/player.types'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { MdComputer, MdOutlineSpeaker } from 'react-icons/md'

const CurrentDevice = (props: DeviceDTO) => {
  const { name, type } = props
  const { playerName } = usePlaybackStore()

  return (
    <div className="rounded-md bg-gradient-to-b from-spotifyGreen/20 to-gray-900 px-3 py-4">
      <div className="flex items-center gap-3">
        <span className="pb-1">
          {type === 'Smartphone' && <IoPhonePortraitOutline size="1.5rem" />}
          {type === 'Computer' && <MdComputer size="1.5rem" />}
          {type === 'Speaker' && <MdOutlineSpeaker size="1.5rem" />}
        </span>
        <p className="block w-[90%] overflow-hidden text-ellipsis whitespace-nowrap text-xl font-extrabold">
          {playerName === name ? 'This web browser' : 'Current Device'}
        </p>
      </div>
      <span className="text-md">{name}</span>
    </div>
  )
}

export default CurrentDevice
