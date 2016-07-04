/*!
 * Mon, 04 Jul 2016 07:52:35 GMT
 *  * built by `zhe-he`
 */
webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(180);

	var React = __webpack_require__(7);
	var ReactDOM = __webpack_require__(44);

	// 模拟数据
	var data = [
	    		{name:'选项1',show:'A',isOpen:true},
	    		{name:'选项2',show:'B',isOpen:false},
	    		{name:'选项3',show:'C',isOpen:false}
	    	]

	// 选项卡组件
	let Tab = React.createClass({displayName: "Tab",
		render:function(){
			return (
			React.createElement("section", {className: "tab"}, 
				React.createElement(TabNav, {handleClick: this.handleClick, data: this.state.data}), 
				React.createElement(TabBox, {data: this.state.data})
			)
			);
		},
		getInitialState:function(){
		    return {
		    	data: data
		    };
		},
		handleClick:function(k){
			var data = this.state.data.map(function(value,key)  {return value.isOpen = k === key,value;});
			this.setState({data:data});
		}
	});
	let TabNav = React.createClass({displayName: "TabNav",
		propsTypes: {
			data: React.PropTypes.array.isRequired
		},
		render:function(){
			var navChildNode = this.props.data.map( function(value,key) 
				{return React.createElement("a", {key: key, onClick: this.props.handleClick.bind(null,key), href: "javascript:;", className: "flex-child"}, value.name);}.bind(this)
			);
			return (
				React.createElement("nav", {className: "flex"}, 
					navChildNode
				)
			);
		}
	});
	let TabBox = React.createClass({displayName: "TabBox",
		propTypes: {
			data: React.PropTypes.array.isRequired
		},
		render:function(){
			var tabBoxChildNode = this.props.data.map(function(value,key)  {return React.createElement("div", {key: key, className: value.isOpen?'show':''}, value.show);});
			return (
				React.createElement("div", null, 
					tabBoxChildNode
				)
			)
		}
	})


	// 输出
	ReactDOM.render(
		React.createElement(Tab, null),
		document.querySelector('div')
	);

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(181);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tab.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tab.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".tab {\n  width: 200px;\n  text-align: center;\n  font-size: 16px;\n  line-height: 24px; }\n  .tab > nav a {\n    border-right: 1px solid #ccc; }\n    .tab > nav a:last-child {\n      border-right: none; }\n  .tab > div > div {\n    display: none;\n    width: 200px;\n    height: 200px; }\n    .tab > div > div.show {\n      display: block; }\n    .tab > div > div:nth-child(1) {\n      background-color: red; }\n    .tab > div > div:nth-child(2) {\n      background-color: yellow; }\n    .tab > div > div:nth-child(3) {\n      background-color: blue; }\n", ""]);

	// exports


/***/ }

});