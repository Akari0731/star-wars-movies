import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { TextInput } from '.';
import { renderWithProviders } from '../../utils/test-utils';

describe('TextInput', () => {
  test('renders text input', () => {
    const mockOnChange = jest.fn((x) => x);
    renderWithProviders(
      <TextInput name="name" placeholderText="placeholder" onChange={mockOnChange} value="" />
    );

    const inputEl = screen.getByRole('textbox', { name: 'name' });
    expect(inputEl.getAttribute('placeholder')).toBe('placeholder');
    expect(inputEl.getAttribute('name')).toBe('name');
    expect(inputEl.getAttribute('value')).toBe('');
  });

  test('trigger onChange when typing', () => {
    const mockOnChange = jest.fn();
    renderWithProviders(
      <TextInput name="name" placeholderText="placeholder" onChange={mockOnChange} value="" />
    );

    const inputEl = screen.getByRole('textbox', { name: 'name' });
    fireEvent.change(inputEl, { target: { value: 'Attack' } });

    expect(mockOnChange).toBeCalledTimes(1);
  });
});
