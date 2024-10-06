import { gql } from '@apollo/client'

export const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
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
