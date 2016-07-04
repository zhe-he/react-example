require('../css/reset.css');
require('../css/tab.scss');

var React = require('react');
var ReactDOM = require('react-dom');

// 模拟数据
var data = [
    		{name:'选项1',show:'A',isOpen:true},
    		{name:'选项2',show:'B',isOpen:false},
    		{name:'选项3',show:'C',isOpen:false}
    	]

// 选项卡组件
let Tab = React.createClass({
	render(){
		return (
		<section className="tab">
			<TabNav handleClick={this.handleClick} data={this.state.data} />
			<TabBox data={this.state.data} />
		</section>
		);
	},
	getInitialState(){
	    return {
	    	data: data
	    };
	},
	handleClick(k){
		var data = this.state.data.map((value,key) => (value.isOpen = k === key,value));
		this.setState({data});
	}
});
let TabNav = React.createClass({
	propsTypes: {
		data: React.PropTypes.array.isRequired
	},
	render(){
		var navChildNode = this.props.data.map( (value,key) =>
			(<a key={key} onClick={this.props.handleClick.bind(null,key)} href="javascript:;" className="flex-child">{value.name}</a>)
		);
		return (
			<nav className="flex">
				{navChildNode}
			</nav>
		);
	}
});
let TabBox = React.createClass({
	propTypes: {
		data: React.PropTypes.array.isRequired
	},
	render(){
		var tabBoxChildNode = this.props.data.map((value,key) => <div key={key} className={value.isOpen?'show':''}>{value.show}</div>);
		return (
			<div>
				{tabBoxChildNode}
			</div>
		)
	}
})


// 输出
ReactDOM.render(
	<Tab />,
	document.querySelector('div')
);