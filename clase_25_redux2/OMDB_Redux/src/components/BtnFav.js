import React from 'react';
import { Link } from 'react-router';

const BtnFav= React.createClass({

	handleSubmit(e) {
		console.log("btn ADD FAVORITO");
		this.props.fetchAddFav({Title: this.props.movie.Title, imdbID: this.props.movie.imdbID})
	},

	render() {

		if(!(this.props.user.loged)) {

			return( null )

		} else if(
			this.props.user.favorites.length === 0 ? true : !(this.props.user.favorites.find(movie => movie.imdbID === this.props.movie.imdbID)) ) {

			return(
				<div className= 'buttonFav'>
	      	<button onClick={this.handleSubmit}>+</button>
				</div>
			)
		} else {
			
			return(
				<div className= 'buttonFav faved'>
					<h5>V</h5>
				</div>
			)
		}
	}
})

export default BtnFav