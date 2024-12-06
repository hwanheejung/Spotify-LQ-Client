import { gql } from '@apollo/client'

export const GET_AVAILABLE_DEVICES = gql`
  query {
    availableDevices {
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
    playbackTransfer(deviceId: $deviceId)
  }
`

export const START_PLAYBACK = gql`
  mutation ($input: StartResumePlaybackInput!) {
    startResumePlayback(input: $input)
  }
`

export const GET_QUEUE = gql`
  query {
    player {
      currentTrack {
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
        lyrics {
          available
          locked
          data {
            id
            plainLyrics
            syncedLyrics
          }
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
