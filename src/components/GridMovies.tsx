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
}

const GridMovies = ({ page , genreCode }: GridMoviesProps) => {
    const [movies, setMovies] = useState<Movie[]>([]);

      useEffect(() => {
        getAnimatedMovies(page, genreCode)
          .then(data => {
            setMovies(data.results); 
          })
      }, [page, genreCode]);

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
              alt={`Movie poster for ${movie.title}`} // Agregar atributo alt
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