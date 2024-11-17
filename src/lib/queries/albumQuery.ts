import { AlbumItemDTO } from '@/types/albums'
import { gql } from '@apollo/client'

export type GetSavedAlbumsResponse = {
  getSavedAlbums: {
    items: AlbumItemDTO[]
  }
}

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
