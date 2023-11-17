// import React from "react";

const API_KEY = 'ccedb42a54c3ee36b2d505f569a4b95f';

interface Movie {
    title: string;
}

export const getAnimatedMovies = (): Promise<Movie[]> => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=${API_KEY}`) 
      .then(response => response.json())
}