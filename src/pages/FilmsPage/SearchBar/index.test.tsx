import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { SearchBarContainer } from '.';
import { renderWithProviders } from '../../../utils/test-utils';

describe('SearchBarContainer', () => {
  test('renders text input', () => {
    renderWithProviders(<SearchBarContainer />);

    const inputEl = screen.getByRole('textbox', { name: 'searchBar' });
    expect(inputEl.getAttribute('placeholder')).toBe('Search films by title');
    expect(inputEl.getAttribute('value')).toBe('');
  });

  test('trigger search text change when typing', () => {
    const { store } = renderWithProviders(<SearchBarContainer />);
    expect(store.getState().filmPage.searchText).toBe('');

    const inputEl = screen.getByRole('textbox', { name: 'searchBar' });

    fireEvent.change(inputEl, { target: { value: 'Attack' } });
    expect(inputEl.getAttribute('value')).toBe('Attack');
    expect(store.getState().filmPage.searchText).toBe('Attack');
  });
});
