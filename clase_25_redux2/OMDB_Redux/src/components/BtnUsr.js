import React from 'react';
import { Link } from 'react-router';

const BtnUsr= React.createClass({

	render() {
		if(this.props.user.loged){
			return(
				<div className= 'buttonUsr'>
					<Link to={`/view/${this.props.user.user.username}`}>
						<button>{this.props.user.user.username}</button>
					</Link>
				</div>
			)
		} else {
			return(
				<div className= 'buttonUsr'>
					<Link to={'/login'}>
						<button>Login</button>
					</Link>
				</div>
			)
		}
	}
})

export default BtnUsr