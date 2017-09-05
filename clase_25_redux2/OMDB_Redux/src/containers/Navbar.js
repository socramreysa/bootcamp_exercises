import React from 'react';
import { Link } from 'react-router';
import Buscador from '../components/Buscador';
import BtnUsr from '../components/BtnUsr';

const Navbar = React.createClass({
	
	render() {
		return(
			<div className= 'navbar'>
				<div className= 'navbar-left'>
						<Buscador {...this.props} />
				</div>
				<div className= 'navbar-right'>
						<BtnUsr {...this.props} />
				</div>
			</div>
		)
	}
});

export default Navbar;