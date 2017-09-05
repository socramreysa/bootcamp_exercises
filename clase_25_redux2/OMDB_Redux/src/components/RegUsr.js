import React from 'react';
import { hashHistory } from 'react-router';

const RegUsr= React.createClass({

	handleSubmit(e) {
		e.preventDefault();
		console.log({username: e.target.username.value, password: e.target.password.value})
		this.props.fetchRegUser({username: e.target.username.value, password: e.target.password.value})
		this.props.location.pathname !== '/' ? hashHistory.push('/login') : null
	},
	
	render() {
		return(
			<div className= 'form'>
				<form ref='RegForm' onSubmit={this.handleSubmit}>
					<input type="text" name="username" ></input>
					<input type="password" name="password"></input>
					<input type="submit" name="Register"></input>
				</form>
			</div>
		)
	}
});

export default RegUsr