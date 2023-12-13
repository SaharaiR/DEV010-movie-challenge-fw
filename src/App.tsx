import React from 'react';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import GridMovies from './components/GridMovies';
import Pagination from '../src/pagination';
import DetailMovie from './components/DetailMovie';

  const App: React.FC = () => {
    //const [page, setPage] = useState(1); //nuevo
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState(16);
    const [selectedOrder, setSelectedOrder] = useState('');
    //const [showDetail, setShowDetail] = useState(false);
    //const [selectedMovieId, setSelectedMovieId] = useState('');

    /*useEffect(() => {
      //console.log("dentro del efecto");
      setCurrentPage(page);
    }, [page]);*/

    function handlePageChange(nextPage: number) {
      //setPage(nextPage);
      setCurrentPage(nextPage);
    }

    /*const toggleDetail = () => {
      setShowDetail(!showDetail);
    };  
    const handleMovieClick = (movieId: string) => {
      setSelectedMovieId(movieId);
    };*/

    return (
      <Router>
        <div>
          <MenuBar 
            changeGenre= { setSelectedGenre } 
            changeOrder= { setSelectedOrder }
          />
          <Routes>
            <Route path='/' element={
              <div>
                <GridMovies 
                  page= { currentPage } 
                  genreCode= {selectedGenre }
                  order= { selectedOrder }
                />
                <Pagination
                  currentPage= { currentPage }
                  onPageChange= { handlePageChange } 
                />
              </div>
            }/>  
            <Route path='/detail/:569094' element={ <DetailMovie idMovie='569094' />} />
          </Routes>
          <footer className='footer'>
            <p>Desarrollado por: ISC Saharai Rodríguez Hernández</p>
          </footer>
        </div>
      </Router>
    );
  }

  export default App;

  //<DetailMovie idMovie='502356'/>