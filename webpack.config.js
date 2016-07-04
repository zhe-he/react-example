var webpack = require('webpack');
var path = require("path");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var pluginsText = new Date().toUTCString() + '\n\r * built by `zhe-he`';
module.exports = {
	// 页面入口文件配置
	entry: {
		tab: './src/js/tab.js',
		drag: './src/js/drag.js',
		drag2: './src/js/drag2.js',
		animate: './src/js/animate.js',
		animate2: './src/js/animate2.js'
	},
	// 入口文件输出配置
	output: {
		publicPath: '/assets/', //cdn
		path: path.resolve(__dirname,'assets'),
		filename: 'js/[name].js' //-[chunkhash]
	},
	// 插件项
	plugins: [
		new CommonsChunkPlugin("js/common.js"),
		new webpack.BannerPlugin(pluginsText)
	],
	module: {
		// 加载器配置
		loaders: [
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.(js|jsp)$/, loader:'jsx-loader?harmony'},
			{test: /\.scss$/, loader: 'style!css!sass'},
			{
				test: /\.(png|jpg)$/, 
				loader: 'url-loader?limit=8192&name=[path][name].[ext]?[hash]'
			}
		]
	}
};