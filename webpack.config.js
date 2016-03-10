const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'eval',
	entry: {
		bundle: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/dev-server',
		'./src/index'
	]},
	output: {
		path: path.join(__dirname, '/public/js'),
		filename: '[name].js',
		publicPath: '/public/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('[name].css', {
			allChanks: true,
			disable: process.env.NODE_ENV == 'development'
		})
	],
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loaders: ['react-hot', 'babel?presets[]=es2015'],
				include: path.join(__dirname, 'src')
			}, {
				test: /\.styl$/,
				loader: ExtractTextPlugin.extract(
					'style',
					'css!autoprefixer?browsers=last 2 versions!stylus?resolve url'
				)
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.json']
	},
	devServer: {
		contentBase: path.join(__dirname, '/public')
	}
};
