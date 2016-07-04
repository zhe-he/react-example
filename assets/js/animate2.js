/*!
 * Mon, 04 Jul 2016 07:52:35 GMT
 *  * built by `zhe-he`
 */
webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	// the same as http://web-animations.github.io/web-animations-demos/#additive-color

	__webpack_require__(1);
	__webpack_require__(174);

	var React = __webpack_require__(7);
	var ReactDom = __webpack_require__(44);

	var Animate2 = React.createClass({displayName: "Animate2",
		render:function(){
			this.state.grid = this.setGrid();
			return (
				React.createElement("div", {style: {width:this.props.width,height:this.props.height}, onTouchMove: this.touchmove, onMouseMove: this.mousemove, className: "animate2"}, 
					this.state.grid
				)
			)
		},
		propsTypes: {
			width:  React.PropTypes.number.isRequired,
			height: React.PropTypes.number.isRequired,
			size: React.PropTypes.number
		},
		getInitialState:function(){
			return {
				gridW: Math.ceil(this.props.width/this.props.size),
				gridH: Math.ceil(this.props.height/this.props.size),
				grid: []
			}
		},
		prev: false,
		getDefaultProps:function(){
			return {
				size: 64
			}
		},
		setGrid:function(){
			var grid = [];
			for (var y = 0; y < this.state.gridH; y++) {
				grid[y] = [];
				for (var x = 0; x < this.state.gridW; x++) {
					var X = x*this.props.size, Y = y*this.props.size;
					grid[y][x] = React.createElement("span", {ref: y+'-'+x, "data-key": x+y, "data-coordinate": y+'-'+x, key: 'result-'+y+'-'+x, style: {
						width: this.props.size+'px',
						height: this.props.size+'px',
						WebkitTransform: ("translate(" + X + "px," + Y + "px)"),
						transform: ("translate(" + X + "px," + Y + "px)")
					}});
				};
			};
			return grid;
		},
		touchmove:function(e){
			[].forEach.call(e.touches,this.mousemove);
	    	e.preventDefault();
		},
		mousemove:function(e){
			var span = e.target;
			if (span.tagName.toLowerCase() === 'span' && this.prev !== span) {
				this.prev = false;
				var x = Math.trunc(e.pageX/this.props.size),
					y = Math.trunc(e.pageY/this.props.size);
				this.animateColor(this.refs[y+'-'+x],this.refs[y+'-'+x].dataset.key);
				this.animateTransform(this.refs[y+'-'+x]);
			};
		},
		animateColor:function(ele,c){
			c = c || 0;
			var rgb = [0,0,0];
			rgb[(Date.now()/1000+c)%3|0] = 255;
			ele.animate({
				offset: 0.5,
				composite: 'add',
				backgroundColor: 'rgb('+rgb.join(', ')+')'
			}, 4000);
		},
		animateTransform:function(ele){
			var $__0=  ele.dataset.coordinate.split('-'),y=$__0[0],x=$__0[1];
			var X = x*this.props.size, Y = y*this.props.size;

			ele.animate({
				offset: 0.5,
				composite: 'add',
				WebkitTransform: ("translate(" + X + "px," + Y + "px) scale(0.5) rotate(90deg)"),
				transform: ("translate(" + X + "px," + Y + "px) scale(0.5) rotate(90deg)")
			},500);
		}
	});


	ReactDom.render(
		React.createElement(Animate2, {width: innerWidth, height: innerHeight, size: 64}),
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
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./animate2.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./animate2.scss");
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
	exports.push([module.id, "body {\n  overflow: hidden; }\n\n.animate2 {\n  overflow: hidden;\n  background-color: black; }\n  .animate2 span {\n    background-color: black;\n    position: absolute;\n    -webkit-transform-origin: center center;\n    transform-origin: center center; }\n", ""]);

	// exports


/***/ }

});