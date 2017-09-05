import React from 'react';
import Navbar from '../containers/Navbar';
import ListaResultados from '../components/ListaResultados';

const Main = React.createClass({
	
	componentWillMount() {
		
	}
	
	render() {
		return (
			<div>
				<Navbar {...this.props}/>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
})

export default Main;