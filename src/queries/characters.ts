import { gql } from '@apollo/client'

export const GET_ALL_CHARACTERS = gql`
  query {
    characters {
      info {
        count
      }
      results {
        id
        name
        image
        gender
        status
        species
        origin {
          name
        }
        location {
          name
        }
        episode {
          name
        }
      }
    }
  }
`
