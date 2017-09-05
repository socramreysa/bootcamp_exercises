var React = require('react')
var ReactDOM = require('react-dom')

module.exports = React.createClass({
  
  render: function(){
    return (
      <div>
        <input placeholder="Cuenta regresiva de..." type='text' ref='seg' onChange= {(e) => {
          e.preventDefault();
          this.props.set(this.refs.seg.value)
        }} />
      </div>
    )
  }
});
