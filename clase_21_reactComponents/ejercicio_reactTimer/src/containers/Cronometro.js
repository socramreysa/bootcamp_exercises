var React = require('react')
var ReactDOM = require('react-dom')
var Reloj = require('../components/Reloj.js');
var Botones = require('../components/Botones.js')

var Cronometro = React.createClass({
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
     		<Botones 
     			start= {this.start}
     			stop= {this.stop}
     			restart= {this.restart}
     		/>
     	</div>  
		)
	},

  start: function(){
  				if(this.state.started == false){
  					var time = this.state.time;
  				this.timeId = setInterval(()=> {
  					time += 1
  					this.setState({time: time, started: true})
  					}, 10);
  			}else{
  				return
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

export default Cronometro;