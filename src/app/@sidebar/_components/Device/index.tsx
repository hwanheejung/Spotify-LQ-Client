import { GET_AVAILABLE_DEVICES } from '@/lib/queries/player.query'
import { DeviceDTO } from '@/types/player'
import { useQuery } from '@apollo/client'
import Header from '../Header'
import CurrentDevice from './CurrentDevice'
import OtherDevices from './OtherDevices'

const Device = () => {
  const { loading, error, data, refetch } = useQuery(GET_AVAILABLE_DEVICES)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const devices = data.getAvailableDevices
  const currentDevice = devices.find((device: DeviceDTO) => device.is_active)
  const otherDevices = devices.filter(
    (device: DeviceDTO) => device.is_active !== true,
  )

  return (
    <div>
      <Header title="Connect to a device" />
      <CurrentDevice {...currentDevice} />
      <OtherDevices data={Object.values(otherDevices)} refetch={refetch} />
    </div>
  )
}
export default Device
