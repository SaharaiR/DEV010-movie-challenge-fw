import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GridMovies from '../components/GridMovies';

jest.mock('../src/connectAPI', () => ({
  getAnimatedMovies: jest.fn().mockResolvedValue({
    results:[
      {
        id: '1',
        poster_path: '/path/to/poster.jpg',
        title: 'Movie Title',
        release_date: '2022-01-01',
      },
      // Add more movie data as needed
    ],
  }),
}));

describe('GridMovies Component', () => {
  it('renders movies correctly', async () => {
    render(<GridMovies page={1} />);

    // Wait for the API call to complete and update the component
    await waitFor(() => {
      expect(screen.getByAltText('Movie Title')).toBeInTheDocument();
    });

    // You can add more assertions here based on your component's behavior
  });

  // Add more test cases as needed
});