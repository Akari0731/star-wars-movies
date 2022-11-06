import React from 'react';
import { useQuery } from 'react-query';
import { Films, useGetFilms } from './hooks/useGetFilms';
import { FilmsPage } from './pages/FilmsPage';
import classes from './App.module.scss';
import { getFilmPageAction } from './store/reducers/filmPageReducer';

function App() {
  const { dispatchInit } = getFilmPageAction();
  const { isLoading, isError, data } = useQuery('fetchFilms', useGetFilms, {
    refetchOnWindowFocus: false,
    onSuccess(data: Films) {
      dispatchInit(data.results);
    }
  });

  return (
    <div className={classes.appWrapper}>
      <h1 className={classes.title}>Star wars films</h1>
      {isLoading ? <div>Loading...</div> : null}
      {isError ? <div>Something went wrong...</div> : null}
      {data ? <FilmsPage /> : null}
    </div>
  );
}

export default App;
