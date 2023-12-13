import {useState, useEffect} from 'react';
import { getAnimatedMovies } from '../connectAPI'
import PosterMovie from '../components/PosterMovie';
//import { Dispatch, SetStateAction } from 'react';
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
  //onMovieClick: Dispatch<SetStateAction<                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            tring>>;
}

/*Función para manejar el clic en una película
const handleMovieClick = (idMovie) => {
  setSelectedMovie(idMovie);
};*/

const GridMovies = ({ page, genreCode, order }: GridMoviesProps) => {
  /* [selectedMovie, setSelectedMovie] = useState<string | null>;
  const handleMovieClick = (movieId: string) => {
    setSelectedMovie(movieId);
    //onMovieClick(movieId);
  };*/
    //console.log(order);
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
              alt={`Movie poster for ${movie.title}`} // Agregar atributo alt
              //onClick={() => handleMovieClick(movie.id)}
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