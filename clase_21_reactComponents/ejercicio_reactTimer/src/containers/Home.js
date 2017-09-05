var React = require('react');
var Link = require('react-router').Link;
var Navbar = require('../components/Navbar.js');

module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <Navbar />
        { this.props.children }
      </div>
    )
  }
});
