import fetch from 'isomorphic-fetch';


///////////////acciones generales
export const FAILED_TO_FETCH = 'FAILED_TO_FETCH';

export function failedToFetch(isFetching, err) {
  return {
    type: FAILED_TO_FETCH,
    isFetching,
    err
  };
}


//////////////////////////////////////////////////acciones para buscar movies
export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export function searchMovies(isFetching) {
  return {
    type: SEARCH_MOVIES,
    isFetching
  };
}

export const RECIVE_MOVIES = 'RECIVE_MOVIES';

export function reciveMovies(movies, isFetching) {
  return {
    type: RECIVE_MOVIES,
    movies,
    isFetching
  };
}

export function fetchMovies(movies) {
  return (dispatch) => {
    dispatch(searchMovies(true));
    return fetch(`http://www.omdbapi.com/?apikey=20dac387&s=${movies}`)
      .then(response => response.json())
      .then(data => dispatch(reciveMovies(data, false)))
      .catch(err => dispatch(failedToFetch(false, err)));
  };
}


//////////////////////////////////////////////////acciones para buscar movie
export const SEARCH_MOVIE = 'SEARCH_MOVIE';

export function searchMovie(isFetching) {
  return {
    type: SEARCH_MOVIE,
    isFetching
  };
}

export const RECIVE_MOVIE = 'RECIVE_MOVIE';

export function reciveMovie(movie, isFetching) {
  return {
    type: RECIVE_MOVIE,
    movie,
    isFetching
  };
}

export function fetchMovie(id) {
  return (dispatch) => {
    dispatch(searchMovie(true));
    return fetch(`http://www.omdbapi.com/?apikey=20dac387&i=${id}`)
      .then(response => response.json())
      .then(data => dispatch(reciveMovie(data, false)))
      .catch(err => dispatch(failedToFetch(false, err)));
  };
}
