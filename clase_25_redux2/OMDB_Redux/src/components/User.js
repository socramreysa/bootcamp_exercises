import React from 'react';
import { Link } from 'react-router';
import Navbar from '../containers/Navbar';
import ListaFavs from '../components/ListaFavs';

const User = React.createClass({

	render() {
		return (
			<div>
				<h1>Estos son tus favoritos:</h1>	
				<ListaFavs {...this.props} />
			</div>
		)
	}
});

export default User;