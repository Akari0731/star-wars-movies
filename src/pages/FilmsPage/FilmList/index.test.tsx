import { act, screen } from '@testing-library/react';
import React from 'react';
import { FilmList } from '.';
import { swapiApiMock } from '../../../utils/mocks/swapiMock';
import { renderWithProviders } from '../../../utils/test-utils';

describe('FilmDetails', () => {
  test('renders correct headers', () => {
    const selectedFilm = swapiApiMock.results[0];
    renderWithProviders(<FilmList />, {
      preloadedState: {
        filmPage: {
          films: swapiApiMock.results,
          searchText: '',
          selectedFilmId: selectedFilm.episode_id
        }
      }
    });

    const headerEl = screen.getByTestId('table-header-tr');
    expect(headerEl.children.length).toBe(3);

    // Header text
    expect(headerEl.children[0].textContent).toBe('Episode');
    expect(headerEl.children[1].textContent).toBe('Title');
    expect(headerEl.children[2].textContent).toBe('Year');

    // Header sort icon
    expect(headerEl.children[0].querySelector('img')?.className).toBe('arrow ');
    expect(headerEl.children[1].querySelector('img')).toBe(null);
    expect(headerEl.children[2].querySelector('img')).toBe(null);
  });

  test('renders correct rows sorted by Episode in ascending order', () => {
    const selectedFilm = swapiApiMock.results[0];
    renderWithProviders(<FilmList />, {
      preloadedState: {
        filmPage: {
          films: swapiApiMock.results,
          searchText: '',
          selectedFilmId: selectedFilm.episode_id
        }
      }
    });

    const bodyEl = screen.getByTestId('table-body');
    expect(bodyEl.children.length).toBe(4);

    // Row text
    expect(bodyEl.children[0].children[0].textContent).toBe('Episode 1');
    expect(bodyEl.children[0].children[1].textContent).toBe('The Phantom Menace');
    expect(bodyEl.children[0].children[2].textContent).toBe('2014-12-19');

    expect(bodyEl.children[1].children[0].textContent).toBe('Episode 4');
    expect(bodyEl.children[1].children[1].textContent).toBe('A New Hope');
    expect(bodyEl.children[1].children[2].textContent).toBe('2014-12-10');

    expect(bodyEl.children[2].children[0].textContent).toBe('Episode 5');
    expect(bodyEl.children[2].children[1].textContent).toBe('The Empire Strikes Back');
    expect(bodyEl.children[2].children[2].textContent).toBe('2014-12-12');

    expect(bodyEl.children[3].children[0].textContent).toBe('Episode 6');
    expect(bodyEl.children[3].children[1].textContent).toBe('Return of the Jedi');
    expect(bodyEl.children[3].children[2].textContent).toBe('2014-12-18');
  });

  test('renders no selected rows if row is not selected', () => {
    renderWithProviders(<FilmList />, {
      preloadedState: {
        filmPage: {
          films: swapiApiMock.results,
          searchText: '',
          selectedFilmId: undefined
        }
      }
    });

    const selectedRow = document.querySelector('.isSelected');
    expect(selectedRow).toBe(null);
  });

  test('renders selected rows if row is not selected', () => {
    const selectedFilm = swapiApiMock.results[0];
    renderWithProviders(<FilmList />, {
      preloadedState: {
        filmPage: {
          films: swapiApiMock.results,
          searchText: '',
          selectedFilmId: selectedFilm.episode_id
        }
      }
    });

    const selectedRow = document.querySelector('.isSelected');
    expect(selectedRow?.children[0].textContent).toBe('Episode 4');
    expect(selectedRow?.children[1].textContent).toBe('A New Hope');
    expect(selectedRow?.children[2].textContent).toBe('2014-12-10');
  });

  test('renders filtered rows by search', () => {
    renderWithProviders(<FilmList />, {
      preloadedState: {
        filmPage: {
          films: swapiApiMock.results,
          searchText: 're',
          selectedFilmId: undefined
        }
      }
    });

    const bodyEl = screen.getByTestId('table-body');
    expect(bodyEl.children.length).toBe(2);

    // Row tex0
    expect(bodyEl.children[0].children[0].textContent).toBe('Episode 5');
    expect(bodyEl.children[0].children[1].textContent).toBe('The Empire Strikes Back');
    expect(bodyEl.children[0].children[2].textContent).toBe('2014-12-12');

    expect(bodyEl.children[1].children[0].textContent).toBe('Episode 6');
    expect(bodyEl.children[1].children[1].textContent).toBe('Return of the Jedi');
    expect(bodyEl.children[1].children[2].textContent).toBe('2014-12-18');
  });

  test('renders correct rows sorted by Episode in descending order by clicking Episode header', () => {
    renderWithProviders(<FilmList />, {
      preloadedState: {
        filmPage: {
          films: swapiApiMock.results,
          searchText: '',
          selectedFilmId: undefined
        }
      }
    });

    const headerEl = screen.getAllByTestId('table-header');
    expect(headerEl[0].querySelector('img')?.className).toBe('arrow ');
    act(() => {
      headerEl[0].click();
    });
    expect(headerEl[0].querySelector('img')?.className).toBe('arrow rotate');

    const bodyEl = screen.getByTestId('table-body');
    expect(bodyEl.children.length).toBe(4);

    // Row text
    expect(bodyEl.children[0].children[0].textContent).toBe('Episode 6');
    expect(bodyEl.children[0].children[1].textContent).toBe('Return of the Jedi');
    expect(bodyEl.children[0].children[2].textContent).toBe('2014-12-18');

    expect(bodyEl.children[1].children[0].textContent).toBe('Episode 5');
    expect(bodyEl.children[1].children[1].textContent).toBe('The Empire Strikes Back');
    expect(bodyEl.children[1].children[2].textContent).toBe('2014-12-12');

    expect(bodyEl.children[2].children[0].textContent).toBe('Episode 4');
    expect(bodyEl.children[2].children[1].textContent).toBe('A New Hope');
    expect(bodyEl.children[2].children[2].textContent).toBe('2014-12-10');

    expect(bodyEl.children[3].children[0].textContent).toBe('Episode 1');
    expect(bodyEl.children[3].children[1].textContent).toBe('The Phantom Menace');
    expect(bodyEl.children[3].children[2].textContent).toBe('2014-12-19');
  });

  test('renders correct rows sorted by Year in ascending order by clicking Year header', () => {
    renderWithProviders(<FilmList />, {
      preloadedState: {
        filmPage: {
          films: swapiApiMock.results,
          searchText: '',
          selectedFilmId: undefined
        }
      }
    });

    const headerEl = screen.getAllByTestId('table-header');
    expect(headerEl[0].querySelector('img')?.className).toBe('arrow ');
    act(() => {
      headerEl[2].click();
    });
    expect(headerEl[2].querySelector('img')?.className).toBe('arrow ');

    const bodyEl = screen.getByTestId('table-body');
    expect(bodyEl.children.length).toBe(4);

    // Row text
    expect(bodyEl.children[0].children[0].textContent).toBe('Episode 4');
    expect(bodyEl.children[0].children[1].textContent).toBe('A New Hope');
    expect(bodyEl.children[0].children[2].textContent).toBe('2014-12-10');

    expect(bodyEl.children[1].children[0].textContent).toBe('Episode 5');
    expect(bodyEl.children[1].children[1].textContent).toBe('The Empire Strikes Back');
    expect(bodyEl.children[1].children[2].textContent).toBe('2014-12-12');

    expect(bodyEl.children[2].children[0].textContent).toBe('Episode 6');
    expect(bodyEl.children[2].children[1].textContent).toBe('Return of the Jedi');
    expect(bodyEl.children[2].children[2].textContent).toBe('2014-12-18');

    expect(bodyEl.children[3].children[0].textContent).toBe('Episode 1');
    expect(bodyEl.children[3].children[1].textContent).toBe('The Phantom Menace');
    expect(bodyEl.children[3].children[2].textContent).toBe('2014-12-19');
  });
});
