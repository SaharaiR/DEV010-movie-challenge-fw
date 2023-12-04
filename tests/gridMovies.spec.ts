import { render, screen, waitFor } from '@testing-library/react';
import GridMovies from '../src/components/GridMovies';

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
  it('renders movies correctly', () => {
    render(<GridMovies page={1} />);

    // Wait for the API call to complete and update the component
    waitFor(() => {
      expect(screen.getByAltText('Movie Title')).toBeInTheDocument();
    });

    // You can add more assertions here based on your component's behavior
  });

  // Add more test cases as needed
});