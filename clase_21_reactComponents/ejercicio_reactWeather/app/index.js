var React = require('react')
var ReactDOM = require('react-dom')
var Input = require('../src/components/Input.js');
var Output = require('../src/components/Output.js')

var Weather = React.createClass({
	getInitialState: function(){
    return {
      name: "",
      temp: ""
    }
  },
	render: function(){
		return(
			<div>
           		<Input
           			buscar={this.buscar}
           		/>
           		<Output
           			nombre={this.state.nombre}
           			temp={this.state.temp}
           		/>
       		</div>  
		)
	},
   	buscar: function(name){
		fetch('api.openweathermap.org/data/2.5/weather?q=${name}&APPID=c67be146dada7afd58b947a26709a746')  
	  	.then(  
	    	function(response) {  
	      		response.json()
	    	})
	    .then(
	    	function(data) { 
	        	this.setState({name: name, temp: data.name.temp})
	        });  
	} 
})

ReactDOM.render(<Weather />, document.getElementById('app'));