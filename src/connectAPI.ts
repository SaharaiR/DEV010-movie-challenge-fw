interface Movie {
    id: string;
    title: string;
    poster_path: string;
    release_date: string;
}

interface MovieResponse{
    page: number;
    //total_pages: number;
    genreCode: number;
    order: string;
    results: Movie[];
}

const options: RequestInit = {
    method: 'GET', 
    headers: { 
      'Accept': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2VkYjQyYTU0YzNlZTM2YjJkNTA1ZjU2OWE0Yjk1ZiIsInN1YiI6IjY1NDk5ZmExMWFjMjkyN2IyZWJkNGMyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DWG-rxr2n3-luJa-wCFvcJpqIOzaB8g4VfiEem5Nioo'
     }
  };

  export const getAnimatedMovies = (page: number, genreCode: number, order: string): Promise<MovieResponse> => {
    let apiUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=16,${genreCode}&page=${page}`;

  /* Agregar el parámetro de orden si se proporciona, 
  igual no es taaan necesario, me hacia ruido que no me mostrara las que vi siempre al inicio XD */
  if (order) {
    apiUrl += `&sort_by=title.${order}`;
  }
    //return fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=16,${genreCode}&page=${page}`, options)
    //return fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=16,${genreCode}&page=${page}&sort_by=title.${order}`, options)
  return fetch(apiUrl, options)  
    .then(response => response.json() as unknown as MovieResponse)
    .catch((err: Error) => {
      console.error(err);
      return Promise.reject(err);
    });
  }