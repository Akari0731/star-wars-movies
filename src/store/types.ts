import { FilmData } from '../hooks/useGetFilms';
export interface StoreState {
  [StoreName.FILM_PAGE]: FilmsPageState;
}

export enum StoreName {
  FILM_PAGE = 'filmPage'
}

export interface FilmsPageState {
  films: FilmData[];
  selectedFilmId: number | undefined;
  searchText: string;
}
