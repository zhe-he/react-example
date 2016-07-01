require('../css/reset.css');
require('../css/animate.scss');

var React = require('react');
var ReactDOM = require('react-dom');

let Animate = React.createClass({
	render(){
		return (
			<div>
				<section className="animate-control">
					<input ref="endX" type="number" step={this.props.stepx} placeholder={this.props.placeholderx} min={this.props.minx} />
					<input ref="endY" type="number" step={this.props.stepy} placeholder={this.props.placeholdery} min={this.props.miny} />
					<a onClick={this.handlerClick} href="javascript:;">start</a>
				</section>
				<div ref="animateDiv" className="animate-box"></div>
			</div>
		)
	},
	handlerClick(){
		let endX = this.refs.endX.value,
			endY = this.refs.endY.value;
		if (endX === '' || endY === '' || !endX > 0 || !endY > 0) {
			alert('请填写数字');
			return false;
		};
			
		let player = this.refs.animateDiv.animate([
	    	{top: endY+'px', left: endX+'px'}
	    ], {
	    	duration: 500
	    });
		player.onfinish = function (){
			this.refs.animateDiv.style.left = endX + 'px';
			this.refs.animateDiv.style.top = endY + 'px';
		}.bind(this);
	},
	getDefaultProps(){
		return {
			stepx: 10,
			stepy: 10,
			placeholderx: 'move to x',
			placeholdery: 'move to y',
			minx: 0,
			miny: 50
		}
	}
});

ReactDOM.render(
	<Animate />,
	document.querySelector('div')
);