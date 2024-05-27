import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

test('renders Header with navigation links', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const logo = screen.getByAltText(/Bearcraft/i);
  expect(logo).toBeInTheDocument();

  const videoLink = screen.getByText(/Video/i);
  expect(videoLink).toBeInTheDocument();

  const audioLink = screen.getByText(/Audio/i);
  expect(audioLink).toBeInTheDocument();

  const aboutLink = screen.getByText(/About/i);
  expect(aboutLink).toBeInTheDocument();

  const shopLink = screen.getByText(/Shop/i);
  expect(shopLink).toBeInTheDocument();
});
