require('../css/reset.css');
require('../css/drag.scss');

var React = require('react');
var ReactDOM = require('react-dom');

var data = {canmove: false,x:20,y:20,disx:0,disy:0};

let Drag = React.createClass({
	render(){
		return (
			<div style={{position:"absolute",top:this.state.y,left:this.state.x}} onMouseDown={this.mousedown} onMouseMove={this.mousemove} onMouseUp={this.mouseup} className="drag"></div>
		)
	},
	getInitialState(){
		return data;
	},
	mousedown(e){
		let disx=e.pageX-this.state.x,disy=e.pageY-this.state.y;
		this.setState({canmove: true,disx,disy});
	},
	mousemove(e){
		if (this.state.canmove) {
			let x = e.pageX - this.state.disx,
				y = e.pageY - this.state.disy;
			this.setState({canmove:true,x,y});
		};
	},
	mouseup(e){
		let x=e.pageX-this.state.disx,y=e.pageY-this.state.disy;
		this.setState({canmove: false,x,y});
	}
});

ReactDOM.render(
	<Drag />,
	document.querySelector('div')
);