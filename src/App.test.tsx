import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './utils/test-utils';

jest.mock('react-query', () => ({
  useQuery: jest.fn().mockReturnValue({ data: {}, isLoading: false, isError: false })
}));

describe('FilmDetails', () => {
  test('renders header, searchBar and films after fetched data', () => {
    renderWithProviders(<App />);

    const titleEl = screen.getByTestId('title');
    expect(titleEl.textContent).toBe('Star wars films');

    const filmPageEl = screen.getByTestId('film-page');
    expect(filmPageEl).toBeTruthy();
  });
});
