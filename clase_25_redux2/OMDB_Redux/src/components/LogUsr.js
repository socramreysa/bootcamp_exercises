import React from 'react';
import { Link, hashHistory } from 'react-router';

const LogUsr= React.createClass({

	handleSubmit(e) {
		e.preventDefault();
		this.props.fetchLogUser({username: e.target.username.value, password: e.target.password.value})
		this.props.location.pathname !== '/' ? hashHistory.push('/') : null
	},

	render() {
		return(
			<div>
				<div className= 'form'>
					<form ref='loginForm' onSubmit={this.handleSubmit}>
						<input type="text" name="username" ></input>
						<input type="password" name="password"></input>
						<input type="submit" name="login"></input>
					</form>
				</div>
				<div className= 'button'>
					<Link to={'/register'}>
						<button>Registrarse</button>
					</Link>
				</div>
			</div>
		)
	}
});

export default LogUsr