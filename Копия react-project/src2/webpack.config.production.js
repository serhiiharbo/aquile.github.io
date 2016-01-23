var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'React Production Yeah!'
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: true,
			mangle: true,
			comments: false
		})
	]
}