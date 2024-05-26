import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders Footer with links and social icons', () => {
  render(<Footer />);

  const subscribeHeading = screen.getByText(/Subscribe/i);
  expect(subscribeHeading).toBeInTheDocument();

  const linksHeading = screen.getByText(/Links/i);
  expect(linksHeading).toBeInTheDocument();

  const connectHeading = screen.getByText(/Connect/i);
  expect(connectHeading).toBeInTheDocument();

  const facebookIcon = screen.getByRole('link', { name: /facebook/i });
  expect(facebookIcon).toBeInTheDocument();
});
