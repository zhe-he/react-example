/*!
 * Mon, 04 Jul 2016 07:52:35 GMT
 *  * built by `zhe-he`
 */
webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(5);

	var React = __webpack_require__(7);
	var ReactDOM = __webpack_require__(44);

	let Animate = React.createClass({displayName: "Animate",
		render:function(){
			return (
				React.createElement("div", null, 
					React.createElement("section", {className: "animate-control"}, 
						React.createElement("input", {ref: "endX", type: "number", step: this.props.stepx, placeholder: this.props.placeholderx, min: this.props.minx}), 
						React.createElement("input", {ref: "endY", type: "number", step: this.props.stepy, placeholder: this.props.placeholdery, min: this.props.miny}), 
						React.createElement("a", {onClick: this.handlerClick, href: "javascript:;"}, "start")
					), 
					React.createElement("div", {ref: "animateDiv", className: "animate-box"})
				)
			)
		},
		handlerClick:function(){
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
		getDefaultProps:function(){
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
		React.createElement(Animate, null),
		document.querySelector('div')
	);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./animate.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./animate.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".animate-control {\n  width: 800px;\n  padding: 10px 10px;\n  font-size: 16px;\n  line-height: 24px;\n  vertical-align: top; }\n  .animate-control > input {\n    height: 24px;\n    margin: 0 5px; }\n  .animate-control > a {\n    display: inline-block;\n    padding: 0 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px; }\n    .animate-control > a:hover {\n      text-decoration: underline; }\n    .animate-control > a:active {\n      background-color: #ccc; }\n\n.animate-box {\n  position: absolute;\n  top: 50px;\n  left: 0;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: -webkit-radial-gradient(bottom left, circle, #ace, #f96, #1E90FF);\n  background: radial-gradient(bottom left, circle, #ace, #f96, #1E90FF);\n  -webkit-filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.8)); }\n", ""]);

	// exports


/***/ }
]);