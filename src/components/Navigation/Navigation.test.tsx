import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import Navigation from './Navigation';

describe('<Navigation />', () => {
  test('it should mount', () => {
    render(<Navigation />);

    const test = screen.getByTestId('Navigation');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});