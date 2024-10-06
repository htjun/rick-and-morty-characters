type Character = {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
  image: string
  episode: string[]
  created: string
}

export default Character
