import axios from 'axios';

interface GetFilmsResponse {
  data: Films;
}

interface Films {
  count: number;
  next?: any;
  previous?: any;
  results: Result[];
}

interface Result {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export const useGetFilms = async (): Promise<GetFilmsResponse> => {
  const { data } = await axios.get<GetFilmsResponse>('http://swapi.dev/api/films');
  return data;
};
