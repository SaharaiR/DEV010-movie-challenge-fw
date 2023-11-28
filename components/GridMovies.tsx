import {useState, useEffect} from 'react'
import { getAnimatedMovies } from '../src/connectAPI'
import PosterMovie from '../components/PosterMovie';
import Pagination from '../src/pagination';
import '../styles/gridMovies.css';

interface Movie {
    id: string;  
    poster_path: string;
    title: string;
    release_date: string;
  }

const GridMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1); //nuevo
    const [currentPage, setCurrentPage] = useState(1);

    /*useEffect(() => {
        getAnimatedMovies().then((data) => {
        setMovies(data.results);
        });  
      }, []);*/
      useEffect(() => {
        getAnimatedMovies(page)
          .then(data => {
            setMovies(data.results); 
            setCurrentPage(page);
          })
      }, [page]);
      
      function handlePageChange(nextPage: number) {
        setPage(nextPage);
      }

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
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange} 
        />
      </div>  
    );   
};

export default GridMovies;

/*getAnimatedMovies().then(animatedMovies => {
        //console.log(animatedMovies);
        //const page = animatedMovies.page;
        const dataMovies = animatedMovies.results;
                dataMovies.forEach((movie) =>{
                              imageURL={movie.poster_path}
                            nameMovie={movie.title}
                            yearMovie={movie.release_date}
                });
            }  */