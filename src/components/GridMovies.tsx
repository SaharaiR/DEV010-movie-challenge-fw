import {useState, useEffect} from 'react';
import { getAnimatedMovies } from '../connectAPI'
import PosterMovie from '../components/PosterMovie';
import '../styles/movieStyle.css';

interface Movie {
    id: string;  
    poster_path: string;
    title: string;
    release_date: string;
  }

interface GridMoviesProps{
  page: number;
  genreCode: number;
  order: string;
}

const GridMovies = ({ page, genreCode, order }: GridMoviesProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getAnimatedMovies(page, genreCode, order)
      .then(data => {
      setMovies(data.results); 
      })
    }, [page, genreCode, order]);

    return (
      <div className='gridMovies'>
        {movies.map((movie) => {
          return (
            <PosterMovie
              key={movie.id}           
              idMovie={movie.id}
              imageURL={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              nameMovie={movie.title}
              yearMovie={movie.release_date.split('-')[0]}
              alt={`Movie poster for ${movie.title}`}
            />   
          );
        })}
      </div>  
    );   
};

export default GridMovies;
