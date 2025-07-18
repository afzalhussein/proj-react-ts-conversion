import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders counter and buttons', () => {
  render(<App />);
  // Test for counter value(initially 0 )
  const counterElement = screen.getByText('0');
  expect(counterElement).toBeInTheDocument();

  // Test for buttons using their actual text content
  const incrementButton = screen.getByRole('button', {name: /Increment/i});
  const decrementButton = screen.getByRole('button', { name: /Decrement/i });
  
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
});

test('renders radio buttons', () => {
  render(<App />);
  
  // Test for radio buttons by their labels
  expect(screen.getAllByRole('radio')).toHaveLength(6);
});
