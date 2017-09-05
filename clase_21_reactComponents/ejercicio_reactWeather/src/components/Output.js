var React = require('react')
var ReactDOM = require('react-dom')

module.exports = React.createClass({
  render: function(){    
    return (
      <div>
        <ul>
	        <li> {this.props.nombre} </li>
	        <li> Temperatura: {this.props.temp} </li>
        </ul>
      </div>
    )
  }
});