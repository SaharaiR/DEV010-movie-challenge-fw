const API_KEY = 'ccedb42a54c3ee36b2d505f569a4b95f';

interface Movie {
    id: string;
    title: string;
    poster_path: string;
    release_date: string;
}

interface MovieResponse{
    page: number;
    results: Movie[];
}

export const getAnimatedMovies = (): Promise<MovieResponse> => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=${API_KEY}`) 
      .then(response => response.json() as unknown as MovieResponse)
}