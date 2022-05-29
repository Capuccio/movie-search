/** @format */

const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './',
		open: true,
		openPage: 'http://localhost:8080',
		host: '0.0.0.0',
		port: 8080,
		historyApiFallback: true,
	},
})
