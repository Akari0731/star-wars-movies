import { Dispatch } from 'react';

export enum FilmsPageActionType {
  FILTER = 'filter',
  SORT = 'sort',
  SELECT = 'select'
}

interface FilterAction {
  type: FilmsPageActionType.FILTER;
  searchText: string;
}

export enum SortKey {
  EPISODE = 'episode',
  YEAR = 'year'
}

interface SortAction {
  type: FilmsPageActionType.SORT;
  sortBy: SortKey;
}

interface SelectAction {
  type: FilmsPageActionType.SELECT;
  episode_id: number;
}

export type FilmsPageAction = FilterAction | SortAction | SelectAction;

const filterFilms = (dispatch: Dispatch<FilterAction>, searchText: string) =>
  dispatch({ type: FilmsPageActionType.FILTER, searchText });

const sortFilms = (dispatch: Dispatch<SortAction>, sortBy: SortKey) =>
  dispatch({ type: FilmsPageActionType.SORT, sortBy });

const selectFilm = (dispatch: Dispatch<SelectAction>, episode_id: number) =>
  dispatch({ type: FilmsPageActionType.SELECT, episode_id });

export { filterFilms, sortFilms, selectFilm };
