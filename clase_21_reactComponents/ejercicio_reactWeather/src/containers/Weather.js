var React = require('react')
var ReactDOM = require('react-dom')
var Input = require('../components/Input.js');
var Output = require('../components/Output.js')

var Weather = React.createClass({
	 getInitialState: function(){
    return {
      nombre:"",
      temp:""
    }
  },
	render: function(){
		return(
			<div>
           		<Input buscar={this.buscar}/>
           		<Output
           		nombre= {this.state.nombre}
           		temp= {this.state.temp}
           		/>
       		</div>  
		)
	},
   	buscar: function(nombre){
   		let url = `http://api.openweathermap.org/data/2.5/weather?q=${nombre}&APPID=c67be146dada7afd58b947a26709a746`
   		console.log(url)
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${nombre}&APPID=c67be146dada7afd58b947a26709a746`, {mode: "cors"})  
	  	.then(  
	    	response => {  
	    		console.log(response)
	      		response.json()
	    	.then(
	      		data => {  
	        		this.setState({nombre: nombre, temp: data.main.temp})
	      		});  
			})
	  	
	}
})

ReactDOM.render(<Weather />, document.getElementById('app'));