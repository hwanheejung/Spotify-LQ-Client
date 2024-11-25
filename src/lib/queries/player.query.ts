import { gql } from '@apollo/client'

export const GET_AVAILABLE_DEVICES = gql`
  query {
    getAvailableDevices {
      id
      name
      type
      is_active
      volume_percent
    }
  }
`

export const TRANSFER_PLAYBACK = gql`
  mutation ($deviceId: String!) {
    transferPlayback(deviceId: $deviceId)
  }
`
