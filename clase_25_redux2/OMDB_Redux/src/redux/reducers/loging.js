import { LOGIN_OUT, LOG_USER, LOGIN_OK, FAILED_TO_LOGIN } from '../actions/actionCreators';

function logingReducer(state = {
	isloging: false,
	user: null,
	loged: false
}, action) {

	switch (action.type) {
		
		case LOGIN_OUT:
			return Object.assign({}, state, {
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
			});

		case LOG_USER:
			return Object.assign({}, state, {
				isloging: true
			});

		case LOGIN_OK:
			return Object.assign({}, state, {
				isloging: false,
				user: action.user,
				loged: true
			});

		case FAILED_TO_LOGIN:
			return Object.assign({}, state, {
				isloging: false,
				err: true
			});

		default:
			return state;
	}
}

export default logingReducer;