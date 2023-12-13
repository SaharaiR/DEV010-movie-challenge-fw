import { useState, useEffect } from "react";
import '../styles/movieStyle.css';

interface DetailMovieProps {
    idMovie: string;
}

interface MovieDetails{
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

function DetailMovie({ idMovie }: DetailMovieProps){
    const [details, setDetails] = useState<MovieDetails | null>(null);//[]>([]);

    useEffect(() => {
        getDetailMovie(Number(idMovie))
            .then(data => {
                setDetails(data);
            })
        }, [idMovie]);

    //console.log(details?.genres);
    const genresNames = details?.genres.map(genre => genre.name);
    return (
        <div className="viewMovieDetails">
            <section>
                <button className="buttonArea"></button>
                <span className="buttonTitle">Regresar</span>
            </section>
            <section className="movieDetailGrid">
                <picture className="poster">
                    <img id={idMovie} src = {`https://image.tmdb.org/t/p/w500${details?.poster_path}`} 
                    alt= {`Movie poster for ${details?.original_title}`} className="poster"/>
                </picture>
                <div className="sumarize">
                    <p className="title"> { details?.original_title }</p>
                    <p className="year">&#127839; ​{ details?.release_date.split('-')[0] }</p>
                    <p className="genres">&#127839; ​{ genresNames?.join(', ') } </p>
                    <p className="tagline">{ details?.tagline }</p>
                    <p className="overview">Resumen: { details?.overview }</p>
                </div>
            </section>
        </div>
    )
}

const getDetailMovie = ( movieId: number ): Promise<MovieDetails/*DetailResponse*//*{results: MovieDetails[]}*/> => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=es-ES`, options)
        .then(response => response.json() as unknown as MovieDetails/*as unknown as DetailResponse*/)
        .catch((err: Error) => {
            console.error(err);
            return Promise.reject(err);
    });
  }

export default DetailMovie;