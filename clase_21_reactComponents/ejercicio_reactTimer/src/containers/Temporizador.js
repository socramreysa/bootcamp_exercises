var React = require('react')
var ReactDOM = require('react-dom')
var Reloj = require('../components/Reloj.js');
var Botones = require('../components/Botones.js');
var Input = require('../components/Input.js');
var Reloj = require('../components/Reloj.js');

var Temporizador = React.createClass({
	componentWillUnmount: function(){
		if(!(this.timeId)){
			return
		}
		clearInterval(this.timeId)
	},

	getInitialState: function(){
    return {
      time: 0,
      started: false
    }
  },

	render: function(){
		return(
			<div>
				<Reloj
					time= {this.state.time}
     		/>
     		<Input
     			set={this.set}
     		/>
     		<Botones 
     			start= {this.start}
     			stop= {this.stop}
     			restart= {this.restart}
     		/>
     	</div>  
		)
	},

	set: function(value){
				this.setState({set: value || 0})
	},

  start: function(){
  				var time = this.state.set
  				if(time === undefined){
  					return
  				}else{
  					if(this.state.started === false){
	  				this.timeId = setInterval(()=> {
		  					if(time === 0){
		  						clearInterval(this.timeId)
		  					}else{
		  						time -= 1
		  					this.setState({time: time, started: true})
		  					}
		  				}, 10);
	  				}else{ 
	  					return 0
	  				}
  				}
  				
	},

	stop: function(){
					clearInterval(this.timeId)
					this.setState({started: false})
	},

	restart: function(){
							clearInterval(this.timeId)
		       		this.setState({time: 0, started: false})
	}
});

export default Temporizador;