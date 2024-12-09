import { gql } from '@apollo/client'

export const GET_ALBUMS_ARTISTS = gql`
  query ($offset: Int = 0, $limit: Int = 20, $after: String) {
    savedAlbums: savedAlbums(offset: $offset, limit: $limit) {
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
    savedArtists: savedArtists(after: $after) {
      id
      name
      images {
        url
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

export const GET_NEW_RELEASES = gql`
  query ($offset: Int = 0, $limit: Int = 4) {
    newReleases(offset: $offset, limit: $limit) {
      id
      name
      images {
        url
      }
      artists {
        id
        name
      }
    }
  }
`
