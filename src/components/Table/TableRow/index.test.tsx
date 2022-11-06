import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { TableRow } from '.';
import { renderWithProviders } from '../../../utils/test-utils';

describe('TableRow', () => {
  test('renders all cells', () => {
    const mockOnClick = jest.fn();
    renderWithProviders(
      <table>
        <tbody>
          <TableRow onRowClick={mockOnClick} cells={['cell1', 'cell2']} isSelected={false} />
        </tbody>
      </table>
    );

    const rowEl = screen.getByTestId('table-row');
    expect(rowEl.children.length).toBe(2);
    expect(rowEl.children[0].textContent).toBe('cell1');
    expect(rowEl.children[1].textContent).toBe('cell2');
  });

  test('has isSelected class when isSelected is true', () => {
    const mockOnClick = jest.fn();
    renderWithProviders(
      <table>
        <tbody>
          <TableRow onRowClick={mockOnClick} cells={['cell1', 'cell2']} isSelected={true} />
        </tbody>
      </table>
    );

    const rowEl = screen.getByTestId('table-row');
    expect(rowEl.className).toBe('row isSelected');
  });

  test('has not isSelected class when isSelected is false', () => {
    const mockOnClick = jest.fn();
    renderWithProviders(
      <table>
        <tbody>
          <TableRow onRowClick={mockOnClick} cells={['cell1', 'cell2']} isSelected={false} />
        </tbody>
      </table>
    );

    const rowEl = screen.getByTestId('table-row');
    expect(rowEl.className).toBe('row ');
  });

  test('trigger onRowClick when clicking row', () => {
    const mockOnClick = jest.fn();
    renderWithProviders(
      <table>
        <tbody>
          <TableRow onRowClick={mockOnClick} cells={['cell1', 'cell2']} isSelected={false} />
        </tbody>
      </table>
    );

    const rowEl = screen.getByTestId('table-row');
    fireEvent.click(rowEl);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
