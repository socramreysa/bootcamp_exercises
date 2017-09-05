import React from 'react';
import ListaPeli from './ListaPeli';
import { Link, hashHistory } from 'react-router';

const ListaFavoritos= React.createClass({
	
	render() {
		if(this.props.movies.Search) {//<-------/////??????????????????

			return(
				<div className="lista-resultados">
      		{this.props.movies.Search.map((movie, i) => {
      			return( <ListaPeli {...this.props} key={i} i={i} movie={movie} /> )} )}
	      </div>
			)
		}else if(this.props.isFetching){
			return(<div>Cargando...</div>)
		}else{
			return(<div>No tienes ninguna pelicula en favoritos broo</div>)
		}
	}
});

export default ListaFavoritos