import { SEARCH_MOVIES, RECIVE_MOVIES, FAILED_TO_FETCH } from '../actions/actionCreators';

function moviesReducer(state = {
  isFetching: false,
  movies: [],
}, action) {

  switch (action.type) {

    case SEARCH_MOVIES:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case RECIVE_MOVIES:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        movies: action.movies,
      });

    case FAILED_TO_FETCH:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        error: action.err,
      });

    default:
      return state;
  }
}

export default moviesReducer;