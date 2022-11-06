import React from 'react';
import { TextInput } from '../../../components/TextInput';
import { getFilmPageAction, getFilmPageState } from '../../../store/reducers/filmPageReducer';
import classes from './index.module.scss';

export const SearchBarContainer: React.FC = () => {
  const { searchText, films, selectedFilmId } = getFilmPageState();
  const { dispatchSearch, dispatchSelect } = getFilmPageAction();
  const resetSelectedFilm = (newSearchText: string) => {
    const selectedFilmTitle = films.find((film) => film.episode_id === selectedFilmId)?.title ?? '';
    const showSelectedFilm = selectedFilmTitle
      .toLowerCase()
      .includes(newSearchText.toLocaleLowerCase());

    if (!showSelectedFilm) {
      dispatchSelect(undefined);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchSearch(event.target.value);
    resetSelectedFilm(event.target.value);
  };

  return (
    <div className={classes.searchBar}>
      <TextInput
        name="searchBar"
        placeholderText="Search films by title"
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
};
