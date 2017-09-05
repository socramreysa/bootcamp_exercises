import React from 'react';
import BtnFav from './BtnFav';

const Peli = React.createClass({

	componentWillMount() {
		this.props.fetchMovie(this.props.params.id)
	},

	render() {
		if(this.props.isFetching) {
			return(<div>Cargando...</div>) 
		}else{
			return(
				<div className= 'peli'>
					<div><img src={this.props.movie.Poster}></img></div>
					<div>
						<h1>{this.props.movie.Title}</h1>
						<h3>Género: </h3>{this.props.movie.Genre}
						<h3>Tipo: </h3>{this.props.movie.Type}
						<h3>Año: </h3>{this.props.movie.Year}
						<h3>Director: </h3>{this.props.movie.Director}
						<h3>Actores: </h3>{this.props.movie.Actors}
						<h3>Sinopsis: </h3><p>{this.props.movie.Plot}</p>
					</div>
					<BtnFav {...this.props} />
				</div>
			)
		}
	}
});

export default Peli