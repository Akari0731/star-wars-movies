import { screen } from '@testing-library/react';
import React from 'react';
import { TableHeader } from '.';
import { SortOrder } from '..';
import { renderWithProviders } from '../../../utils/test-utils';

describe('TableHeader', () => {
  test('show text', () => {
    const mockOnClick = jest.fn();
    renderWithProviders(
      <table>
        <thead>
          <tr>
            <TableHeader text="text" sort={SortOrder.ASC} onClick={mockOnClick} />
          </tr>
        </thead>
      </table>
    );

    const headerEl = screen.getByTestId('table-header');
    expect(headerEl.textContent).toBe('text');
  });
  test('have no width is it is not given', () => {
    const mockOnClick = jest.fn();
    renderWithProviders(
      <table>
        <thead>
          <tr>
            <TableHeader text="text" sort={SortOrder.ASC} onClick={mockOnClick} />
          </tr>
        </thead>
      </table>
    );

    const headerEl = screen.getByTestId('table-header');
    expect(headerEl.style.width).toBe('');
  });

  test('have width is it is given', () => {
    const mockOnClick = jest.fn();
    renderWithProviders(
      <table>
        <thead>
          <tr>
            <TableHeader text="text" width="3rem" sort={SortOrder.ASC} onClick={mockOnClick} />
          </tr>
        </thead>
      </table>
    );

    const headerEl = screen.getByTestId('table-header');
    expect(headerEl.style.width).toBe('3rem');
  });

  test('have sortHeader class when onClick is given', () => {
    const mockOnClick = jest.fn();
    renderWithProviders(
      <table>
        <thead>
          <tr>
            <TableHeader text="text" sort={SortOrder.ASC} onClick={mockOnClick} />
          </tr>
        </thead>
      </table>
    );

    const headerEl = screen.getByTestId('table-header');
    expect(headerEl.className).toBe('sortHeader');
  });

  test('have no sortHeader class when onClick is not given', () => {
    renderWithProviders(
      <table>
        <thead>
          <tr>
            <TableHeader text="text" sort={SortOrder.ASC} />
          </tr>
        </thead>
      </table>
    );

    const headerEl = screen.getByTestId('table-header');
    expect(headerEl.className).toBe('');
  });

  test('have Arrow image when sort is not given', () => {
    renderWithProviders(
      <table>
        <thead>
          <tr>
            <TableHeader text="text" />
          </tr>
        </thead>
      </table>
    );

    const sortArrowEl = screen.queryByTestId('sort-arrow');
    expect(sortArrowEl).toBe(null);
  });

  test('have Arrow image when sort is given', () => {
    renderWithProviders(
      <table>
        <thead>
          <tr>
            <TableHeader text="text" sort={SortOrder.ASC} />
          </tr>
        </thead>
      </table>
    );

    const sortArrowEl = screen.queryByTestId('sort-arrow');
    expect(sortArrowEl).toBeTruthy();
  });

  test('have Arrow image has rotate class when SortOrder.ASC is given', () => {
    renderWithProviders(
      <table>
        <thead>
          <tr>
            <TableHeader text="text" sort={SortOrder.ASC} />
          </tr>
        </thead>
      </table>
    );

    const sortArrowEl = screen.queryByTestId('sort-arrow');
    expect(sortArrowEl?.className).toBe('arrow rotate');
  });

  test('have Arrow image has no rotate class when SortOrder.DESC is given', () => {
    renderWithProviders(
      <table>
        <thead>
          <tr>
            <TableHeader text="text" sort={SortOrder.DESC} />
          </tr>
        </thead>
      </table>
    );

    const sortArrowEl = screen.queryByTestId('sort-arrow');
    expect(sortArrowEl?.className).toBe('arrow ');
  });

  test('trigger onClick when onClick is given', () => {
    const mockOnClick = jest.fn();
    renderWithProviders(
      <table>
        <thead>
          <tr>
            <TableHeader text="text" onClick={mockOnClick} />
          </tr>
        </thead>
      </table>
    );

    const headerEl = screen.getByTestId('table-header');
    headerEl.click();

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
