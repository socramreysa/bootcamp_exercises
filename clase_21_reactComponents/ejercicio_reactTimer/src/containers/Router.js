var React = require('react')
var ReactDOM = require('react-dom')
var Home = require('../containers/Home.js');
import Cronometro from './Cronometro.js';
import Temporizador from './Temporizador.js';
import {hashHistory, Router, Route ,Link} from "react-router"

ReactDOM.render(
	<Router history={hashHistory}>
    <Route path="/" component={Home}>
      <Route path="cronometro" component={Cronometro}/>
      <Route path="temporizador" component={Temporizador}/>
    </Route>
  </Router>,
  document.getElementById('app')
);