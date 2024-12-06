import { gql } from '@apollo/client'

export const GET_ARTIST = gql`
  query ($artistId: String!) {
    artist(artistId: $artistId) {
      id
      name
      type
      followers {
        href
        total
      }
      genres
      images {
        url
        height
        width
      }
    }
  }
`
