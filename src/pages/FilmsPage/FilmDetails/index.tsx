import React from 'react';
import { FilmData } from '../../../hooks/useGetFilms';
import { getFilmPageState } from '../../../store/reducers/filmPageReducer';
import classes from './index.module.scss';

export const FilmDetails: React.FC = () => {
  const { films, selectedFilmId } = getFilmPageState();
  const selectedFilm: FilmData | undefined = selectedFilmId
    ? films.find((film: FilmData) => film.episode_id === selectedFilmId)
    : undefined;

  return (
    <div className={classes.detailsWrapper}>
      {selectedFilm ? (
        <div className={classes.details}>
          <h3 className={classes.title}>{selectedFilm.title}</h3>
          <p>{selectedFilm.opening_crawl}</p>
          <h5>Directed by: {selectedFilm.director}</h5>
        </div>
      ) : (
        <div className={classes.default}>No movie selected</div>
      )}
    </div>
  );
};
