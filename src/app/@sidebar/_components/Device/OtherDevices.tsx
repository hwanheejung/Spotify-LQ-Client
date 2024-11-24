import { DeviceDTO } from '@/types/player'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { MdComputer, MdOutlineSpeaker } from 'react-icons/md'

const OtherDevices = ({ data }: { data: DeviceDTO[] }) => {
  return (
    <div className="px-3 py-5">
      <h3 className="pb-2 font-bold">Select another device</h3>
      {data.map((device: DeviceDTO) => (
        <div key={device.id} className="flex items-center gap-2 py-3">
          <span className="pb-1">
            {device.type === 'Smartphone' && (
              <IoPhonePortraitOutline size="1rem" />
            )}
            {device.type === 'Computer' && <MdComputer size="1rem" />}
            {device.type === 'Speaker' && <MdOutlineSpeaker size="1rem" />}
          </span>
          <div>{device.name}</div>
          <div>{device.is_active}</div>
        </div>
      ))}
    </div>
  )
}

export default OtherDevices
