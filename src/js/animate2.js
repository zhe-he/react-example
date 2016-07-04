// the same as http://web-animations.github.io/web-animations-demos/#additive-color

require('../css/reset.css');
require('../css/animate2.scss');

var React = require('react');
var ReactDom = require('react-dom');

var Animate2 = React.createClass({
	render(){
		this.state.grid = this.setGrid();
		return (
			<div style={{width:this.props.width,height:this.props.height}} onTouchMove={this.touchmove} onMouseMove={this.mousemove} className="animate2">
				{this.state.grid}
			</div>
		)
	},
	propsTypes: {
		width:  React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired,
		size: React.PropTypes.number
	},
	getInitialState(){
		return {
			gridW: Math.ceil(this.props.width/this.props.size),
			gridH: Math.ceil(this.props.height/this.props.size),
			grid: []
		}
	},
	prev: false,
	getDefaultProps(){
		return {
			size: 64
		}
	},
	setGrid(){
		let grid = [];
		for (var y = 0; y < this.state.gridH; y++) {
			grid[y] = [];
			for (var x = 0; x < this.state.gridW; x++) {
				let X = x*this.props.size, Y = y*this.props.size;
				grid[y][x] = <span ref={y+'-'+x} data-key={x+y} data-coordinate={y+'-'+x} key={'result-'+y+'-'+x} style={{
					width: this.props.size+'px',
					height: this.props.size+'px',
					WebkitTransform: `translate(${X}px,${Y}px)`,
					transform: `translate(${X}px,${Y}px)`
				}}></span>;
			};
		};
		return grid;
	},
	touchmove(e){
		[].forEach.call(e.touches,this.mousemove);
    	e.preventDefault();
	},
	mousemove(e){
		let span = e.target;
		if (span.tagName.toLowerCase() === 'span' && this.prev !== span) {
			this.prev = false;
			let x = Math.trunc(e.pageX/this.props.size),
				y = Math.trunc(e.pageY/this.props.size);
			this.animateColor(this.refs[y+'-'+x],this.refs[y+'-'+x].dataset.key);
			this.animateTransform(this.refs[y+'-'+x]);
		};
	},
	animateColor(ele,c=0){
		let rgb = [0,0,0];
		rgb[(Date.now()/1000+c)%3|0] = 255;
		ele.animate({
			offset: 0.5,
			composite: 'add',
			backgroundColor: 'rgb('+rgb.join(', ')+')'
		}, 4000);
	},
	animateTransform(ele){
		let [y,x] = ele.dataset.coordinate.split('-');
		let X = x*this.props.size, Y = y*this.props.size;

		ele.animate({
			offset: 0.5,
			composite: 'add',
			WebkitTransform: `translate(${X}px,${Y}px) scale(0.5) rotate(90deg)`,
			transform: `translate(${X}px,${Y}px) scale(0.5) rotate(90deg)`
		},500);
	}
});


ReactDom.render(
	<Animate2 width={innerWidth} height={innerHeight} size={64} />,
	document.querySelector('div')
);