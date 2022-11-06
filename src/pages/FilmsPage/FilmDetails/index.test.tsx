import { screen } from '@testing-library/react';
import React from 'react';
import { FilmDetails } from '.';
import { swapiApiMock } from '../../../utils/mocks/swapiMock';
import { renderWithProviders } from '../../../utils/test-utils';

describe('FilmDetails', () => {
  test('renders no film available when film is not selected', () => {
    renderWithProviders(<FilmDetails />);

    const noMovieSelectedEl = screen.getByTestId('no-movie-selected');
    expect(noMovieSelectedEl).toBeTruthy();
  });

  test('renders film details when film is selected', () => {
    const selectedFilm = swapiApiMock.results[0];
    renderWithProviders(<FilmDetails />, {
      preloadedState: {
        filmPage: {
          films: swapiApiMock.results,
          searchText: '',
          selectedFilmId: selectedFilm.episode_id
        }
      }
    });

    const filmTitle = screen.getByTestId('film-title').textContent;
    const filmOpeningCrawl = screen.getByTestId('film-opening-crawl').textContent;
    const filmDirector = screen.getByTestId('film-director').textContent;
    expect(filmTitle).toBe(selectedFilm.title);
    expect(filmOpeningCrawl).toBe(selectedFilm.opening_crawl);
    expect(filmDirector).toBe(`Directed by: ${selectedFilm.director}`);
  });
});
