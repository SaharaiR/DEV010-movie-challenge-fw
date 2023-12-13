import '../styles/movieStyle.css';

interface MovieProps{
  idMovie: string;
  imageURL: string;
  nameMovie: string;
  yearMovie: string;
  alt: string;
  //onClick: string;
}

//const [selectedMovie, setSelectedMovie] = useState('');

function PosterMovie({idMovie, imageURL, nameMovie, yearMovie, alt} : MovieProps) {
      return (
        <picture className='poster'>
            <img id={idMovie} src = {imageURL} alt= {alt} className='posterMovie'/>
            <figcaption>{nameMovie}</figcaption>
            <span>{yearMovie}</span>
        </picture>
      )
}

export default PosterMovie;