var React = require('react')
var ReactDOM = require('react-dom')
import {Link} from "react-router"

module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <Link to="/cronometro" activeClassName="active" >Cronómetro</Link>
        <Link to="/temporizador" activeClassName="active">Temporizador</Link>
      </div>
    )
  }
});