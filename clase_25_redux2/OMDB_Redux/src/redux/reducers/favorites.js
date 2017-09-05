import { ADD_FAV, REMOVE_FAV } from '../actions/actionCreators';

function favoritesReducer(state = {
	favorites: [],
}, action) {

	switch (action.type) {

		case ADD_FAV:
			var newFav = [...state.favorites];
			newFav.push(action.favorite);

				return Object.assign({}, state, {
					favorites: newFav 
				});

		case REMOVE_FAV:
			var newState = Object.assign({}, state)
			newState.favorites.filter(favorite => favorite.id !== action.id)

			return Object.assign({}, newState);

		default:
			return state;
	}
}

export default favoritesReducer;