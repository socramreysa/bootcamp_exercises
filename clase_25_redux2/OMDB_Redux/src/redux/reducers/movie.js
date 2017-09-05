import { SEARCH_MOVIE, RECIVE_MOVIE, FAILED_TO_FETCH } from '../actions/actionCreators';

function movieReducer(state = {
  isFetching: false,
  movie: [],
}, action) {

  switch (action.type) {

    case SEARCH_MOVIE:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case RECIVE_MOVIE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        movie: action.movie,
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

export default movieReducer;