export type DeviceDTO = {
  id: string
  name: string
  type: 'Computer' | 'Smartphone' | 'Speaker'
  is_active: boolean
  volume_percent: number
}
