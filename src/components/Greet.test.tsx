import React from 'react';
import Greet from './Greet';
import { render, screen } from '@testing-library/react';

test('Greet renders correctly', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});

test('Greet renders with a name', () => {
  render(<Greet name="Mike" />);
  const textElement = screen.getByText('Hello Mike');
  expect(textElement).toBeInTheDocument();
});
