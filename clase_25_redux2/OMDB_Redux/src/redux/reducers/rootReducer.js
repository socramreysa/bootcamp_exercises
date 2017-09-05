import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


//import reducers
import movies from './movies';
import movie from './movie';
import loging from './loging';
import registering from './registering';
import favorites from './favorites';


//combine reducers
const rootReducer = combineReducers({movies, movie, favorites, user: loging, registering, routing: routerReducer});

export default rootReducer;