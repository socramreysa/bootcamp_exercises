import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

//estado inicial
const InitialState = {
	movies: {
		movies: [],
		err: false,
		isFetching: false
	},
	movie: {
		movie: []
	},
	user: {
		loged: false,
		isloging: false,
		user: null,
		err: false,
		favorites: []
		},
	registering: {
		isReg: false,
		err: false
	}
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, InitialState, composeEnhancers( applyMiddleware(thunkMiddleware)));

export default store;