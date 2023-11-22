// import React from 'react';
import '../styles/postermovie.css'

interface MovieProps{
  idMovie: string;
  imageURL: string;
  nameMovie: string;
  yearMovie: string;
}

function PosterMovie({idMovie, imageURL, nameMovie, yearMovie} : MovieProps) {
      return (
        <picture className='poster'>
            <img id={idMovie} src = {imageURL} alt='Poster movie' className='posterMovie'/>
            <figcaption>{nameMovie}</figcaption>
            <span>{yearMovie}</span>
        </picture>
      )
}

export default PosterMovie;