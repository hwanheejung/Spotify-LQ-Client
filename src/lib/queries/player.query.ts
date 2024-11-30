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

export const START_PLAYBACK = gql`
  mutation (
    $deviceId: String!
    $type: String!
    $id: String
    $ids: [String]
    $offset: OffsetInput
  ) {
    startResumePlayback(
      deviceId: $deviceId
      type: $type
      id: $id
      ids: $ids
      offset: $offset
    )
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
    }
  }
`
