/** @format */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DotEnv = require('dotenv-webpack')

module.exports = {
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new DotEnv({
			path: path.resolve(__dirname, '.env'),
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
