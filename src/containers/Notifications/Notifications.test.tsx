import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import Notifications from './Notifications';

describe('<Notifications />', () => {
  test('it should mount', () => {
    render(<Notifications />);

    const test = screen.getByTestId('Notifications');

    expect(test).toBeInTheDocument();
  });
});