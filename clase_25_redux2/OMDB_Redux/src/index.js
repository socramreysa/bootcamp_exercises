import React from 'react';
import { render } from 'react-dom';

//import components
import App from './containers/App';
import Main from './containers/Main';
import Peli from './components/Peli';
import ListaResultados from './components/ListaResultados';
import Usuario from './components/Usuario';
import LogUsr from './components/LogUsr';
import RegUsr from './components/RegUsr';
import Favorites from './components/Favorites';
import User from './components/User';

//import react router deps
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store';

//routes
const router = (
		<Provider store= {store}>
			<Router history= {hashHistory}>
				<Route path='/' component={App}>
					<IndexRoute component={ListaResultados}></IndexRoute>
						<Route path='/view/:user' component={User}></Route>
						<Route path='/login' component={LogUsr}></Route>
						<Route path='/register' component={RegUsr}></Route>
						<Route path='/view/movie/:id' component={Peli}></Route>
				</Route>
			</Router>
		</Provider>
	)

render(router, document.getElementById('app'));