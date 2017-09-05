var React = require('react')
var ReactDOM = require('react-dom')

module.exports = React.createClass({

  format: function(cantSeg){
    let mls = cantSeg % 100;
    if (mls/10 < 1) mls = '0' + mls;
    let seg = cantSeg / 100 | 0;
    if (seg>59) seg = seg % 60;
    if (seg/10 < 1) seg = '0' + seg;
    let min = cantSeg / 6000 | 0;
    if (min/10 < 1) min = '0' + min;
    return `${min}:${seg}:${mls}`; 
  },

  render: function(){
    const time = this.format(this.props.time)
    return (
      <div>
        <h1>
          {time}
        </h1>
      </div>
    )
  }
});