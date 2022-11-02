import React from 'react';
import { useQuery } from 'react-query';
import { useGetFilms } from './hooks/useGetFilms';

function App() {
  const { isLoading, isError } = useQuery('fetchFilms', useGetFilms, {
    onSuccess(data) {
      console.log(data);
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  return <div></div>;
}

export default App;
