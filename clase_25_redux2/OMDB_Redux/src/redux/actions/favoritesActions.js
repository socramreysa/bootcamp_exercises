import fetch from 'isomorphic-fetch';


export const ADD_FAV = 'ADD_FAV';

export function addFavorite(favorite) {
	return {
		type: ADD_FAV,
		favorite
	};
}



export const REMOVE_FAV = 'REMOVE_FAV';

export function removeFav(favorite) {
	return {
		type: REMOVE_FAV,
		favorite
	};
}


export function fetchAddFav(favorite) {
	return (dispatch) => {
		console.log('Dispatch from action:', favorite)
		return fetch('./api/saveFav', {
			headers: { "Content-Type" : "application/JSON" },
			credentials: "include",
			method: "POST",
			body: JSON.stringify(favorite)
		})
		.then(response => response.json())
    .then(data => dispatch(addFavorite(data)))
	}
}


export function fetchRemFav(favorite) {
	return (dispatch) => {
		dispatch(removeFav());
		return fetch('./api/removefav', {
			headers: { "Content-Type" : "application/JSON" },
			credentials: "include",
			method: "POST",
			body: JSON.stringify(favorite.imdbID)
		})
	}
};