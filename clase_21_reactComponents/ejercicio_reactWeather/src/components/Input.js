var React = require('react')
var ReactDOM = require('react-dom')

module.exports = React.createClass({
  
  render: function(){
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.buscar(this.refs.name.value)
        }}>
          <input placeholder="Nombre de la ciudad" type='text' ref='name' />
          <button>Buscar temperatura</button>
        </form>
      </div>  
    )
  }
});
