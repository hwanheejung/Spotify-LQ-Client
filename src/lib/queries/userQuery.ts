import { gql } from '@apollo/client'

export const GET_USER = gql`
  query {
    getUserProfile {
      display_name
      email
    }
  }
`
