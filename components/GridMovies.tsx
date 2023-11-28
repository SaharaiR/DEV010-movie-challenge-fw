import {useState, useEffect} from 'react';
import { getAnimatedMovies } from '../src/connectAPI'
import PosterMovie from '../components/PosterMovie';
import '../styles/gridMovies.css';

interface Movie {
    id: string;  
    poster_path: string;
    title: string;
    release_date: string;
  }

interface GridMoviesProps{
  page: number;
}

const GridMovies = ({ page }: GridMoviesProps) => {
    const [movies, setMovies] = useState<Movie[]>([]);

      useEffect(() => {
        getAnimatedMovies(page)
          .then(data => {
            setMovies(data.results); 
          })
      }, [page]);

    return (
      <div className='gridMovies'>
        {movies.map((movie) => {
          return (
            <PosterMovie
              key={movie.id}           
              idMovie={movie.id}
              imageURL={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              nameMovie={movie.title}
              yearMovie={movie.release_date}  
            />   
          );
        })}
      </div>  
    );   
};

export default GridMovies;


/*<Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange} 
        /> */
/*getAnimatedMovies().then(animatedMovies => {
        //console.log(animatedMovies);
        //const page = animatedMovies.page;
        const dataMovies = animatedMovies.results;
                dataMovies.forEach((movie) =>{
                              imageURL={movie.poster_path}
                            nameMovie={movie.title}
                            yearMovie={movie.release_date}
                });
            }  
            
             /*useEffect(() => {
        getAnimatedMovies().then((data) => {
        setMovies(data.results);
        });  
      }, []);*/