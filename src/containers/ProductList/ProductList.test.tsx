import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import ProductList from './ProductList';

describe('<ProductList />', () => {
  test('it should mount', () => {
    render(<ProductList />);

    const test = screen.getByTestId('ProductList');

    expect(test).toBeInTheDocument();
  });
});