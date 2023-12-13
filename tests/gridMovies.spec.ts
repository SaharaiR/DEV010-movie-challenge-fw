import { render, screen, waitFor } from '@testing-library/react';
import GridMovies from '../src/components/GridMovies';

jest.mock('../src/connectAPI', () => ({
  getAnimatedMovies: jest.fn().mockResolvedValue({
    results:[
      {
        id: '1',
        poster_path: '/path/to/poster.jpg',
        title: 'Movie Title',
        release_date: '2022',
      },
    ],
  }),
}));

describe('GridMovies Component', () => {
  it('renders movies correctly', () => {
    render(<GridMovies 
              page={1} 
              genrecode={16}
              order={''} />);
    waitFor(() => {
      expect(screen.getByAltText('Movie Title')).toBeInTheDocument();
    });
  });
});