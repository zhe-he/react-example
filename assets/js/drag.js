/*!
 * Fri, 01 Jul 2016 09:42:02 GMT
 *  * built by `zhe-he`
 */
webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(174);

	var React = __webpack_require__(7);
	var ReactDOM = __webpack_require__(44);

	var data = {canmove: false,x:20,y:20,disx:0,disy:0};

	let Drag = React.createClass({displayName: "Drag",
		render:function(){
			return (
				React.createElement("div", {style: {position:"absolute",top:this.state.y,left:this.state.x}, onMouseDown: this.mousedown, onMouseMove: this.mousemove, onMouseUp: this.mouseup, className: "drag"})
			)
		},
		getInitialState:function(){
			return data;
		},
		mousedown:function(e){
			let disx=e.pageX-this.state.x,disy=e.pageY-this.state.y;
			this.setState({canmove: true,disx:disx,disy:disy});
		},
		mousemove:function(e){
			if (this.state.canmove) {
				let x = e.pageX - this.state.disx,
					y = e.pageY - this.state.disy;
				this.setState({canmove:true,x:x,y:y});
			};
		},
		mouseup:function(e){
			let x=e.pageX-this.state.disx,y=e.pageY-this.state.disy;
			this.setState({canmove: false,x:x,y:y});
		}
	});

	ReactDOM.render(
		React.createElement(Drag, null),
		document.querySelector('div')
	);

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(175);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./drag.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./drag.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".drag {\n  width: 100px;\n  height: 100px;\n  background-color: lightblue; }\n  .drag:after {\n    content: \"\";\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    width: 1px;\n    height: 1px; }\n", ""]);

	// exports


/***/ }

});