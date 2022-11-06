import React from 'react';
import { useQuery } from 'react-query';
import { useGetFilms } from './hooks/useGetFilms';
import { FilmsPage } from './pages/FilmsPage';
import { FilmsPageProvider } from './pages/FilmsPage/contexts/FilmsPageContext';
import classes from './App.module.scss';

function App() {
  const { isLoading, isError, data } = useQuery('fetchFilms', useGetFilms);

  return (
    <div className={classes.appWrapper}>
      <h1 className={classes.title}>Star wars films</h1>
      {isLoading ? <div>Loading...</div> : null}
      {isError ? <div>Something went wrong...</div> : null}
      {data ? (
        <FilmsPageProvider data={data}>
          <FilmsPage />
        </FilmsPageProvider>
      ) : null}
    </div>
  );
}

export default App;
