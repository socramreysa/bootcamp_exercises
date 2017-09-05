var React = require('react')
var ReactDOM = require('react-dom')

module.exports = React.createClass({

  render: function(){    
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.start()
        }}>
          <button>Empezar</button>
        </form>

        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.stop()
        }}>
          <button>Parar</button>
        </form>

        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.restart()
        }}>
          <button>Reiniciar</button>
        </form>

      </div>
    )
  }
});