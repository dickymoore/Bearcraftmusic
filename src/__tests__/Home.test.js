import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders Home page with video and image', () => {
  render(<Home />);

  const videoIframe = screen.getByTitle(/YouTube video player/i);
  expect(videoIframe).toBeInTheDocument();

  const homeImage = screen.getByAltText(/Bearcraft/i);
  expect(homeImage).toBeInTheDocument();
});
