import React from 'react';
import { useFilmPageContext } from '../contexts/FilmsPageContext';
import { selectFilm, sortFilms, SortKey } from '../contexts/FilmsPageContext/actions';
import { FilmData } from '../../../hooks/useGetFilms';
import { TableHeaderProps, Table, TableRowProps, SortOrder } from '../../../components/Table';

export const FilmList: React.FC = () => {
  const {
    state: { films, sortKey, sortOrder, searchText, selectedFilmId },
    dispatch
  } = useFilmPageContext();
  const filmsToDisplay: FilmData[] = films
    .filter((film) =>
      searchText ? film.title.toLowerCase().includes(searchText.toLocaleLowerCase()) : true
    )
    .sort((a, b) => {
      switch (sortKey) {
        case SortKey.EPISODE:
          if (sortOrder === SortOrder.ASC) {
            return a.episode_id > b.episode_id ? -1 : 1;
          }
          return a.episode_id < b.episode_id ? -1 : 1;
        case SortKey.YEAR:
          if (sortOrder === SortOrder.ASC) {
            return a.release_date > b.release_date ? -1 : 1;
          }
          return a.release_date < b.release_date ? -1 : 1;
      }
    });

  const headers: TableHeaderProps[] = [
    {
      text: 'Episode',
      sort: sortKey === SortKey.EPISODE ? sortOrder : undefined,
      onClick: () => sortFilms(dispatch, SortKey.EPISODE)
    },
    { text: 'Title', width: '15rem' },
    {
      text: 'Year',
      sort: sortKey === SortKey.YEAR ? sortOrder : undefined,
      onClick: () => sortFilms(dispatch, SortKey.YEAR)
    }
  ];

  const rowProps: TableRowProps<FilmData> = {
    isSelected: (film: FilmData) => selectedFilmId === film.episode_id,
    onRowClick: (film: FilmData) => selectFilm(dispatch, film.episode_id),
    getCells: (film: FilmData) => [
      `Episode ${film.episode_id}`,
      film.title,
      film.created.slice(0, 10)
    ]
  };

  return <Table<FilmData> headers={headers} data={filmsToDisplay} rowProps={rowProps} />;
};
