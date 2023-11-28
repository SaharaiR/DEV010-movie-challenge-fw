import React from 'react';
import {useState, useEffect} from 'react';
import MenuBar from '../components/MenuBar';
import GridMovies from '../components/GridMovies';
import Pagination from '../src/pagination';
import FooterInfo from '../components/FooterInfo';

  const App: React.FC = () => {
    const [page, setPage] = useState(1); //nuevo
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
      setCurrentPage(page);
    }, [page]);

    function handlePageChange(nextPage: number) {
      setPage(nextPage);
    }
    return (
      <div>
        <MenuBar/ >
        <GridMovies page={page}/ >
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange} 
        />
        <FooterInfo/ >
      </div>
    );
  }

  export default App;