import React from 'react';
import ListaPeli from './ListaPeli';

const ListaFavs= React.createClass({
	
	render() {
		if(this.props.user.favorites === []) {

			return(
				<div className="lista-favoritos">
					{this.props.user.favorites.map((movie, i) => {
						return( <ListaPeli {...this.props} key={i} i={i} movie={movie} /> )} )}
				</div>
			)
		}else{
			return(<div>No tienes ningún favorito en tu lista, que estas esperando?!</div>)
		}
	}
});

export default ListaFavs
