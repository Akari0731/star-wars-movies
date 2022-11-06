import axios from 'axios';

export interface Films {
  count: number;
  next?: number;
  previous?: number;
  results: FilmData[];
}

export interface FilmData {
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

export const useGetFilms = async (): Promise<Films> => {
  const { data } = await axios.get<Films>('http://swapi.dev/api/films');

  return data;
};
