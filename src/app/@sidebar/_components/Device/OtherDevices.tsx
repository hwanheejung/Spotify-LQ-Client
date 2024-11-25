import { TRANSFER_PLAYBACK } from '@/lib/queries/player.query'
import { DeviceDTO } from '@/types/player'
import { useMutation } from '@apollo/client'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { MdComputer, MdOutlineSpeaker } from 'react-icons/md'

const OtherDevices = ({
  data,
  refetch,
}: {
  data: DeviceDTO[]
  refetch: () => void
}) => {
  const [transferPlayback, { loading }] = useMutation(TRANSFER_PLAYBACK)

  const handleDeviceClick = async (deviceId: string) => {
    try {
      await transferPlayback({
        variables: {
          deviceId,
        },
      })
      console.log(`Playback transferred to device ID: ${deviceId}`)
      await refetch()
    } catch (err) {
      console.error(
        `Failed to transfer playback to device ID: ${deviceId}`,
        err,
      )
    }
  }

  if (loading) return 'Loading...'

  return (
    <div className="px-3 py-5">
      <h3 className="pb-2 font-bold">Select another device</h3>
      {data.map((device: DeviceDTO) => (
        <button
          key={device.id}
          className="flex items-center gap-2 py-3"
          onClick={() => handleDeviceClick(device.id)}
        >
          <span className="pb-1">
            {device.type === 'Smartphone' && (
              <IoPhonePortraitOutline size="1rem" />
            )}
            {device.type === 'Computer' && <MdComputer size="1rem" />}
            {device.type === 'Speaker' && <MdOutlineSpeaker size="1rem" />}
          </span>
          <div>{device.name}</div>
          <div>{device.is_active}</div>
        </button>
      ))}
    </div>
  )
}

export default OtherDevices
