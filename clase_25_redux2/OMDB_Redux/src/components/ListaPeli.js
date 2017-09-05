import React from 'react';
import { Link } from 'react-router';

const ListaPeli= React.createClass({
	
	render() {
		return(
			<div className="lista-resultado">
      	<Link to={`/view/movie/${this.props.movie.imdbID}`}>
      		{this.props.movie.Title}
      	</Link>
      </div>
		)
	}
});

export default ListaPeli