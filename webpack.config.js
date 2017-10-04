const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
	entry: {
		albums: './src/ts/src/index.ts',
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[hash].js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		modules: [
			'node_modules',
			'.'
		],
	},
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
			},
			{
				test: /\.s(a|c)ss$/,
				loader: 'sass-loader',
			},
		]
	},
	target: 'web',
	plugins: [
		new CheckerPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/html/index.html'),
		}),
	],
}