import { getClient } from '@/lib/apollo-client'
import { GET_ALL_CHARACTERS } from '@/queries/characters'

export default async function Home() {
  const { data: allCharacters } = await getClient().query({
    query: GET_ALL_CHARACTERS,
  })

  const {
    characters: { results: characters },
  } = allCharacters

  return (
    <div>
      <pre>{JSON.stringify(characters, null, 2)}</pre>
    </div>
  )
}
