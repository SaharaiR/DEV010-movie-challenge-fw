import React from 'react';
import {useState, useEffect} from 'react';
import MenuBar from './components/MenuBar';
import GridMovies from './components/GridMovies';
import Pagination from '../src/pagination';

  const App: React.FC = () => {
    const [page, setPage] = useState(1); //nuevo
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState(16);

    useEffect(() => {
      setCurrentPage(page);
    }, [page]);

    function handlePageChange(nextPage: number) {
      setPage(nextPage);
    }

    return (
      <div>
        <MenuBar changeGenre={setSelectedGenre} />
        <GridMovies 
          page= { page } 
          genreCode= {selectedGenre}/>
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange} 
        />
        <footer>
          <p>Desarrollado por: ISC Saharai Rodríguez Hernández</p>
        </footer>
      </div>
    );
  }

  export default App;