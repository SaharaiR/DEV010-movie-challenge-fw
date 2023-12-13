import { Link } from 'react-router-dom';
import '../styles/movieStyle.css';

interface MovieProps{
  idMovie: string;
  imageURL: string;
  nameMovie: string;
  yearMovie: string;
  alt: string;
}

function PosterMovie({idMovie, imageURL, nameMovie, yearMovie, alt} : MovieProps) {
      return (
        <picture>
          <Link to={`/detail/${String(idMovie)}`}>
            <img id={String(idMovie)} src = {imageURL} alt= {alt} className='posterMovie'/>
          </Link>
          <figcaption>{nameMovie}</figcaption>
          <span>{yearMovie}</span>
        </picture>
      )
}

export default PosterMovie;