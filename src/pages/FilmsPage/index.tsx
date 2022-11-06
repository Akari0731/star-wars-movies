import React from 'react';
import { FilmDetails } from './FilmDetails';
import { FilmList } from './FilmList';
import { SearchBarContainer } from './SearchBar';
import classes from './index.module.scss';

export const FilmsPage: React.FC = () => {
  return (
    <div className={classes.pageWrapper}>
      <SearchBarContainer />
      <div className={classes.contents}>
        <FilmList />
        <FilmDetails />
      </div>
    </div>
  );
};
