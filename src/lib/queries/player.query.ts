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

export const GET_QUEUE = gql`
  query {
    getQueue {
      currently_playing {
        id
        name
        album {
          id
          name
          images {
            url
          }
        }
        artists {
          id
          name
        }
      }

      queue {
        id
        name
        artists {
          id
          name
        }
      }
    }
  }
`
