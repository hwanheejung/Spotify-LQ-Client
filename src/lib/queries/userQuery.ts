import { gql } from '@apollo/client'

export const GET_USER = gql`
  query {
    getUserInfo {
      display_name
      email
    }
  }
`
