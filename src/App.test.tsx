import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders homepage', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bark Resume/i);
  expect(linkElement).toBeInTheDocument();
});
