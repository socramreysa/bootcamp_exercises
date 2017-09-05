import React from 'react';
import { Link, hashHistory } from 'react-router';

const Buscador = React.createClass({

	handleSubmit(e) {
		e.preventDefault();
		this.props.fetchMovies(this.refs.busqueda.value)
		this.refs.buscador.reset()
		this.props.location.pathname !== '/' ? hashHistory.push('/') : null
	},
	
	render() {
		return(
			<div className= 'input'>
				<form ref='buscador' onSubmit={this.handleSubmit}>
					<input type='text' ref='busqueda' placeholder='buscar pelicula' />
						<input type='submit' hidden />
      		</form>
			</div>
		)
	}
});

export default Buscador;