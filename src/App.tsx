import React from 'react';
import MenuBar from '../components/MenuBar';
import GridMovies from '../components/GridMovies';
import FooterInfo from '../components/FooterInfo';

  const App: React.FC = () => {
    return (
      <div>
        <MenuBar/ >
        <GridMovies/ >
        <FooterInfo/ >
      </div>
    );
  }

  export default App;