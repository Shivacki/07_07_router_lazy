
export const FETCH_PATHS = {
  characters: 'https://rickandmortyapi.com/api/character',
  locations: 'https://rickandmortyapi.com/api/location',
  episodes: 'https://rickandmortyapi.com/api/episode',
}


const mockPrefix = '/src/mock/';

export const FETCH_PATHS_MOCK = {
  characters: mockPrefix + 'characters.json',
  episodes: mockPrefix + 'episodes.json',
  locations: mockPrefix + 'locations.json',
}
