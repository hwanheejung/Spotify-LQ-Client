import { gql } from '@apollo/client'

export const GET_SAVED_ALBUMS = gql`
  query ($offset: Int = 0, $limit: Int = 20) {
    getSavedAlbums(offset: $offset, limit: $limit) {
      items {
        added_at
        album {
          id
          images {
            url
          }
          name
          type
          artists {
            name
          }
        }
      }
    }
  }
`

export const GET_ALBUM_TRACKS = gql`
  query ($albumId: String!) {
    getAlbumTracks(albumId: $albumId) {
      items {
        id
        name
        artists {
          name
        }
        duration_ms
        track_number
      }
    }
  }
`
