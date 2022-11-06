import React from 'react';
import { TextInput } from '../../../components/TextInput';
import { useFilmPageContext } from '../contexts/FilmsPageContext';
import { filterFilms } from '../contexts/FilmsPageContext/actions';
import classes from './index.module.scss';

export const SearchBarContainer: React.FC = () => {
  const { state, dispatch } = useFilmPageContext();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterFilms(dispatch, event.target.value);
  };

  return (
    <div className={classes.searchBar}>
      <TextInput
        name="searchBar"
        placeholderText="Search films by title"
        onChange={handleChange}
        value={state.searchText}
      />
    </div>
  );
};
