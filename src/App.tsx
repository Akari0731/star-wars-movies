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
      <h1 className={classes.title} data-testid="title">
        Star wars films
      </h1>
      {isLoading ? <div data-testid="loading">Loading...</div> : null}
      {isError ? <div data-testid="error-message">Something went wrong...</div> : null}
      {data && !isLoading && !isError ? <FilmsPage /> : null}
    </div>
  );
}

export default App;
