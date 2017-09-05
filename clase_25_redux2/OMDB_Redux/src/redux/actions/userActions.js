import fetch from 'isomorphic-fetch';


//////////////////////////////////////////////////acciones para loguear user
export const LOG_USER = 'LOG_USER';

export function logUser() {
	return {
		type: LOG_USER
	};
}

export const LOGIN_OUT = 'LOGIN_OUT';

export function loginOut() {
	return {
		type: LOGIN_OUT,
	};
}

export const LOGIN_OK = 'LOGIN_OK';

export function loginOK(user) {
	return {
		type: LOGIN_OK,
		user
	};
}

export const FAILED_TO_LOGIN = 'FAILED_TO_LOGIN';

export function failedToLogin() {
	return {
		type: FAILED_TO_LOGIN
	};
}

export function fetchLogUser(user) {
	return (dispatch) => {
		dispatch(logUser());
		return fetch('./api/login', {
			headers: { "Content-Type" : "application/JSON" },
			method: "POST",
			credentials: "include",
			body: JSON.stringify(user)
		})
			.then(response => response.json())
			.then(data => data !== false? dispatch(loginOK(data)) : dispatch(failedToLogin()));
	};
}

//////////////////////////////////////////////////acciones para registrar user
export const REG_USER = 'REG_USER';

export function regUser(){
	return {
		type: REG_USER,
	};
}

export const REG_OK = 'REG_OK';

export function regOK(){
	return {
		type: REG_OK,
	};
}

export const FAILED_TO_REG = 'FAILED_TO_REG';

export function failedToRegister() {
	return {
		type: FAILED_TO_REG,
	};
}

export function fetchRegUser(user) {
	return (dispatch) => {
		dispatch(regUser());
		return fetch('./api/register', {
			headers: { "Content-Type" : "application/JSON" },
			method: "POST",
			body: JSON.stringify(user)
		})
			.then(response => response.json())
			.then(data => data !== false? dispatch(regOK()) : dispatch(failedToRegister()));
	};
}