import { useState, useEffect } from "react";
import iconPalomita from '../assets/iconPalomitas.png';
import logo from '../assets/palmolita.png';
import { useParams, Link } from 'react-router-dom';
import '../styles/movieStyle.css';

/*interface DetailMovieProps {
    idMovie: string;
}*/

interface MovieDetails{
    id: string;
    poster_path: string;
    altImg: string;
    original_title: string;
    release_date: string;
    genres: []; /*"genres": [{"id": 16,"name": "Animación"},{"id": 10751,"name": "Familia"},*/
    tagline: string;
    overview: string;
}

const options: RequestInit = {
    method: 'GET', 
    headers: { 
      'Accept': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2VkYjQyYTU0YzNlZTM2YjJkNTA1ZjU2OWE0Yjk1ZiIsInN1YiI6IjY1NDk5ZmExMWFjMjkyN2IyZWJkNGMyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DWG-rxr2n3-luJa-wCFvcJpqIOzaB8g4VfiEem5Nioo'
     }
  };

//function DetailMovie({ idMovie }: DetailMovieProps){
function DetailMovie(){
    const movieID = useParams<{idMovie: string}>();
    const [details, setDetails] = useState<MovieDetails | null>(null);//[]>([]);

    const idMovieAsString = movieID && typeof movieID === 'object' ? movieID.idMovie : movieID;
    //console.log(idMovieAsString);

    useEffect(() => {
        getDetailMovie(Number(idMovieAsString))
            .then(data => {
                setDetails(data);
            })
        }, [idMovieAsString]);

    //console.log(details?.genres);
    const genresNames = details?.genres.map(genre => genre.name);
    return (
        <div className="viewMovieDetails">
            <section className="headerArea">
                <img src = {logo}  alt = 'Logo de sitio' className="imgMovieDetails"></img>
                <h1 className="h1MovieDetails">Tu sitio de películas animadas</h1>
            </section>
            <section className="buttonArea">
                <Link to='/'>
                    <button className="btnBack"></button>
                </Link>
                <span className="btnTitle">Regresar</span>
            </section>
            <section className="movieDetailGrid">
                <picture className="poster">
                    <img id={details?.id} src = {`https://image.tmdb.org/t/p/w500${details?.poster_path}`} 
                    alt= {`Movie poster for ${details?.original_title}`} className="poster"/>
                </picture>
                <div className="sumarize">
                    <p className="title"> { details?.original_title }</p>
                    <p className="year">
                        <img className="iconPopcorn" src= {iconPalomita} alt='Icono de Palomitas'></img>
                        ​{ details?.release_date.split('-')[0] }
                    </p>
                    <p className="genres">
                        <img className="iconPopcorn" src= {iconPalomita} alt='Icono de Palomitas'></img>
                        ​{ genresNames?.join(', ') } 
                    </p>
                    <p className="tagline">{ details?.tagline }</p>
                    <p className="overview">Resumen: { details?.overview }</p>
                </div>
            </section>
        </div>
    )
}

const getDetailMovie = ( movieId: number ): Promise<MovieDetails> => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=es-ES`, options)
        .then(response => response.json() as unknown as MovieDetails)
        .catch((err: Error) => {
            console.error(err);
            return Promise.reject(err);
    });
  }

export default DetailMovie;

//codigo icono HTML palomita: &#127871;