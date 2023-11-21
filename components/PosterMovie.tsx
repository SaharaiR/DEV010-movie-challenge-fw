// import React from 'react';
import '../styles/postermovie.css'

interface MovieProps{
  imageURL: string;
  nameMovie: string;
  yearMovie: string;
}

function PosterMovie({imageURL,nameMovie: movieName,yearMovie} : MovieProps) {
      return (
        <picture className='poster'>
            <img src = {imageURL} alt=''/>
            <figcaption>{movieName}</figcaption>
            <span>{yearMovie}</span>
        </picture>
      )
}

export default PosterMovie;