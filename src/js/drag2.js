require('../css/reset.css');
require('../css/drag2.scss');

var React = require('react');
var ReactDOM = require('react-dom');

var data = {x:20,y:20,disx:0,disy:0};

let Drag = React.createClass({
	render(){
		return (
			<div style={{position:"absolute",top:this.state.y,left:this.state.x}} onMouseDown={this.mousedown} className="drag"></div>
		)
	},
	componentDidMount(){
		document.body.style.height = window.innerHeight + 'px';
		window.addEventListener('mousemove',this.move,false);
		window.addEventListener('mouseup',this.up,false);
	},
	mousedown(e){
		let canmove = true,
			disx = e.pageX - this.state.x,
			disy = e.pageY - this.state.y;
		this.setState({canmove,disx,disy});
	},
	move(e){
		if (this.state.canmove) {
			let x = e.pageX-this.state.disx,y = e.pageY-this.state.disy;
			this.setState({x,y});
		};
	},
	up(e){
		if (this.state.canmove) {
			let canmove = false,
				x = e.pageX - this.state.disx,
				y = e.pageY - this.state.disy;
			this.setState({canmove,x,y});
		}
	},
	componentWillUnmount(){
		window.removeEventListener('mousemove',this.move,false);
		window.removeEventListener('mouseup',this.up,false);
	},
	getInitialState(){
		return Object.assign({canmove: false},data);
	}
});

ReactDOM.render(
	<Drag />,
	document.querySelector('div')
);