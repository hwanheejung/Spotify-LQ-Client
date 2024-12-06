import { gql } from '@apollo/client'

export const GET_SAVED_ALBUMS = gql`
  query ($offset: Int = 0, $limit: Int = 20) {
    savedAlbums(offset: $offset, limit: $limit) {
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
`

export const GET_ALBUM = gql`
  query ($albumId: String!) {
    album(albumId: $albumId) {
      id
      name
      images {
        url
        height
        width
      }
      artists {
        id
        name
      }
      album_type
      total_tracks
      release_date
      tracks {
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
