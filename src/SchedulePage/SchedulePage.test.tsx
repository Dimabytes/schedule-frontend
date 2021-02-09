import React from 'react';
import { render } from '@testing-library/react';
import { SchedulePage } from './SchedulePage';

test('renders learn react link', () => {
  const screen = render(<SchedulePage />);
  const p = screen.getByText(/Anthill/i);
  expect(p).toBeInTheDocument();
});
