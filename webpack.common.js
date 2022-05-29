/** @format */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	output: {
		filename: 'js/[name].[contenthash].chunk.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		clean: true,
	},
}
