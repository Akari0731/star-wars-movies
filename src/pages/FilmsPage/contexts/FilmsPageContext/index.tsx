import React from 'react';
import { SortOrder } from '../../../../components/Table';
import { FilmData, Films } from '../../../../hooks/useGetFilms';
import { FilmsPageAction, SortKey } from './actions';
import { filmsPageReducer } from './reducer';

export interface FilmsPageState {
  films: FilmData[];
  selectedFilmId: number | undefined;
  sortKey: SortKey;
  sortOrder: SortOrder;
  searchText: string | undefined;
}

interface FilmsPageContext {
  state: FilmsPageState;
  dispatch: React.Dispatch<FilmsPageAction>;
}

const FilmsPageContext = React.createContext<FilmsPageContext | undefined>(undefined);

const FilmsPageProvider = ({
  data,
  children
}: {
  data: Films | undefined;
  children: React.ReactNode;
}): JSX.Element => {
  const [state, dispatch] = React.useReducer(filmsPageReducer, {
    films: data ? data.results : [],
    selectedFilmId: undefined,
    sortKey: SortKey.EPISODE,
    sortOrder: SortOrder.ASC,
    searchText: undefined
  });
  const value = { state, dispatch };

  return <FilmsPageContext.Provider value={value}>{children}</FilmsPageContext.Provider>;
};

const useFilmPageContext = () => {
  const context = React.useContext(FilmsPageContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
};

export { FilmsPageProvider, useFilmPageContext };
