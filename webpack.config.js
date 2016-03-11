const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'eval',
	entry: {
		bundle: [
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
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				drop_console: true,
				unsafe: true,
				warnings: false
			}
		}),
		new ExtractTextPlugin('[name].css', {
			allChanks: true,
			disable: process.env.NODE_ENV == 'development'
		})
	],
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loaders: ['babel?presets[]=es2015'],
				include: path.join(__dirname, 'src')
			}, {
				test: /\.styl$/,
				loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
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
