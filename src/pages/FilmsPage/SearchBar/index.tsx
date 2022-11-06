import React from 'react';
import { TextInput } from '../../../components/TextInput';
import { getFilmPageAction, getFilmPageState } from '../../../store/reducers/filmPageReducer';
import classes from './index.module.scss';

export const SearchBarContainer: React.FC = () => {
  const { searchText } = getFilmPageState();
  const { dispatchSearch } = getFilmPageAction();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchSearch(event.target.value);
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
