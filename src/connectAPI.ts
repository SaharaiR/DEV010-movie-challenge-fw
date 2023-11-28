interface Movie {
    id: string;
    title: string;
    poster_path: string;
    release_date: string;
}

interface MovieResponse{
    page: number;
    total_pages: number;
    results: Movie[];
}

const options: RequestInit = {
    method: 'GET', 
    headers: { 
      'Accept': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2VkYjQyYTU0YzNlZTM2YjJkNTA1ZjU2OWE0Yjk1ZiIsInN1YiI6IjY1NDk5ZmExMWFjMjkyN2IyZWJkNGMyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DWG-rxr2n3-luJa-wCFvcJpqIOzaB8g4VfiEem5Nioo'
     } 
  };

  export const getAnimatedMovies = (page: number): Promise<MovieResponse> => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=16&page=${page}`, options)
    .then(response => response.json() as unknown as MovieResponse)
    .catch((err: Error) => {
      console.error(err);
      return Promise.reject(err);
    });
  }
    /*const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2VkYjQyYTU0YzNlZTM2YjJkNTA1ZjU2OWE0Yjk1ZiIsInN1YiI6IjY1NDk5ZmExMWFjMjkyN2IyZWJkNGMyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DWG-rxr2n3-luJa-wCFvcJpqIOzaB8g4VfiEem5Nioo'
  }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err)); */



    /*export const getAnimatedMovies = (): Promise<MovieResponse> => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=16&page=${page}&api_key=${API_KEY}`) 
      .then(response => response.json() as unknown as MovieResponse)
}*/