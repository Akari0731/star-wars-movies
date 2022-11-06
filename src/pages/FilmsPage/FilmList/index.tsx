import React, { useState } from 'react';
import { FilmData } from '../../../hooks/useGetFilms';
import { TableHeaderProps, Table, TableRowProps, SortOrder } from '../../../components/Table';
import { getFilmPageAction, getFilmPageState } from '../../../store/reducers/filmPageReducer';

enum SortKey {
  EPISODE = 'episode',
  YEAR = 'year'
}

export const FilmList: React.FC = () => {
  const [sortKey, setSortKey] = useState<SortKey>(SortKey.EPISODE);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.ASC);

  const { films, searchText, selectedFilmId } = getFilmPageState();
  const { dispatchSelect } = getFilmPageAction();

  const filmsToDisplay: FilmData[] = films
    .filter((film: FilmData) =>
      searchText ? film.title.toLowerCase().includes(searchText.toLocaleLowerCase()) : true
    )
    .sort((a: FilmData, b: FilmData) => {
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
      onClick: () =>
        sortKey === SortKey.EPISODE
          ? setSortOrder(sortOrder === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC)
          : setSortKey(SortKey.EPISODE)
    },
    { text: 'Title', width: '15rem' },
    {
      text: 'Year',
      sort: sortKey === SortKey.YEAR ? sortOrder : undefined,
      onClick: () =>
        sortKey === SortKey.YEAR
          ? setSortOrder(sortOrder === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC)
          : setSortKey(SortKey.YEAR)
    }
  ];

  const rowProps: TableRowProps<FilmData> = {
    isSelected: (film: FilmData) => selectedFilmId === film.episode_id,
    onRowClick: (film: FilmData) => dispatchSelect(film.episode_id),
    getCells: (film: FilmData) => [
      `Episode ${film.episode_id}`,
      film.title,
      film.created.slice(0, 10)
    ]
  };

  return <Table<FilmData> headers={headers} data={filmsToDisplay} rowProps={rowProps} />;
};
