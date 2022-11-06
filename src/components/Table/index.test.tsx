import { screen } from '@testing-library/react';
import React from 'react';
import { SortOrder, Table } from '.';
import { FilmData } from '../../hooks/useGetFilms';
import { swapiApiMock } from '../../utils/mocks/swapiMock';
import { renderWithProviders } from '../../utils/test-utils';

describe('Table', () => {
  const mockOnClick = jest.fn();
  const headers = [
    { text: 'header1', sort: SortOrder.ASC, width: '3rem', onClick: mockOnClick },
    { text: 'header2' }
  ];
  const mockOnRowClick = jest.fn();
  const rowProps = {
    isSelected: (rowData: FilmData) => rowData.episode_id === 4,
    getCells: (rowData: FilmData) => [rowData.title, rowData.opening_crawl],
    onRowClick: mockOnRowClick
  };
  test('show correct length of headers', () => {
    renderWithProviders(
      <Table<FilmData>
        headers={headers}
        data={swapiApiMock.results.slice(0, 2)}
        rowProps={rowProps}
      />
    );

    const headerEl = screen.getByTestId('table-header-tr');
    expect(headerEl.children.length).toBe(2);
  });

  test('show correct row', () => {
    renderWithProviders(
      <Table<FilmData>
        headers={headers}
        data={swapiApiMock.results.slice(0, 2)}
        rowProps={rowProps}
      />
    );

    const bodyEl = screen.getByTestId('table-body');
    expect(bodyEl.children.length).toBe(2);
    expect(bodyEl.children[0].querySelectorAll('td').length).toBe(2);
    expect(bodyEl.children[0].querySelectorAll('td')[0].textContent).toBe('A New Hope');
    expect(bodyEl.children[0].querySelectorAll('td')[1].textContent).toBe(
      'It is a period of civil war.'
    );
    expect(bodyEl.children[0].className).toBe('row isSelected');
    expect(bodyEl.children[1].className).toBe('row ');
  });
});
