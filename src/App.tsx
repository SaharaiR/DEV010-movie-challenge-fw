import React from 'react';
import {useState} from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import GridMovies from './components/GridMovies';
import Pagination from './pagination';
import DetailMovie from './components/DetailMovie';

  const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState(16);
    const [selectedOrder, setSelectedOrder] = useState('');
    
    function handlePageChange(nextPage: number) {
      setCurrentPage(nextPage);
    }

    return (
      <Router>
        <div>
          <Routes>
            <Route path='/' element={
              <div>
                <MenuBar 
                  changeGenre= { setSelectedGenre } 
                  changeOrder= { setSelectedOrder }
                />
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
            <Route path="/detail/:idMovie" element={<DetailMovie />} />
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
  //<Route path='/detail/:569094' element={ <DetailMovie idMovie='569094' />} />