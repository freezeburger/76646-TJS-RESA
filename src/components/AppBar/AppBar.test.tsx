import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import AppBar from './AppBar';

describe('<AppBar />', () => {
  test('it should mount', () => {
    render(<AppBar />);

    const test = screen.getByTestId('AppBar');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});