import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { FilmData } from '../../hooks/useGetFilms';
import { FilmsPageState, StoreName, StoreState } from '../types';

export const filmPageInitialState: FilmsPageState = {
  films: [],
  selectedFilmId: undefined,
  searchText: ''
};

export const filmPageSlice = createSlice({
  name: StoreName.FILM_PAGE,
  initialState: filmPageInitialState,
  reducers: {
    init: (state: FilmsPageState, action: { payload: FilmData[] }) => {
      state.films = action.payload;
    },
    search: (state: FilmsPageState, action: { payload: string }) => {
      state.searchText = action.payload;
    },
    select: (state: FilmsPageState, action: { payload: number | undefined }) => {
      state.selectedFilmId = action.payload;
    }
  }
});

export const filmPageReducer = filmPageSlice.reducer;

export const getFilmPageState = (): FilmsPageState =>
  useSelector((state: StoreState) => state[StoreName.FILM_PAGE]);

export const getFilmPageAction = () => {
  const { init, search, select } = filmPageSlice.actions;
  const dispatch = useDispatch();

  return {
    dispatchInit: (payload: FilmData[]) => dispatch(init(payload)),
    dispatchSearch: (payload: string) => dispatch(search(payload)),
    dispatchSelect: (payload: number | undefined) => dispatch(select(payload))
  };
};
