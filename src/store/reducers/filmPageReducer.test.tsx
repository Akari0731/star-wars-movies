import React from 'react';
import { swapiApiMock } from '../../utils/mocks/swapiMock';
import { getFilmPageAction, getFilmPageState } from './filmPageReducer';
import { renderWithProviders } from '../../utils/test-utils';
import { act, fireEvent, screen } from '@testing-library/react';

const StoreTestComponent: React.FC = () => {
  const { films, searchText, selectedFilmId } = getFilmPageState();
  const { dispatchSelect, dispatchInit, dispatchSearch } = getFilmPageAction();

  return (
    <>
      <div data-testid="films" onClick={() => dispatchInit(swapiApiMock.results)}>
        {`firstItemId: ${films[0]?.episode_id}, length: ${films.length}`}
      </div>
      <div data-testid="selectedFilmId" onClick={() => dispatchSelect(5)}>
        {selectedFilmId}
      </div>
      <input
        data-testid="searchText"
        value={searchText}
        onChange={(e) => dispatchSearch(e.target.value)}
      />
    </>
  );
};

describe('filmPageReducer', () => {
  test('should have correct initial values', () => {
    renderWithProviders(<StoreTestComponent />);

    expect(screen.getByTestId('films').textContent).toBe('firstItemId: undefined, length: 0');
    expect(screen.getByTestId('selectedFilmId').textContent).toBe('');
    expect(screen.getByTestId('searchText').getAttribute('value')).toBe('');
  });

  test('should set films', () => {
    renderWithProviders(<StoreTestComponent />);

    act(() => {
      screen.getByTestId('films').click();
    });
    expect(screen.getByTestId('films').textContent).toBe('firstItemId: 4, length: 4');
  });

  test('should select film', () => {
    renderWithProviders(<StoreTestComponent />);

    act(() => {
      screen.getByTestId('selectedFilmId').click();
    });
    expect(screen.getByTestId('selectedFilmId').textContent).toBe('5');
  });

  test('should search films', () => {
    renderWithProviders(<StoreTestComponent />);

    act(() => {
      const inputEl = screen.getByTestId('searchText');
      fireEvent.change(inputEl, { target: { value: 'Attack' } });
    });
    expect(screen.getByTestId('searchText').getAttribute('value')).toBe('Attack');
  });
});
