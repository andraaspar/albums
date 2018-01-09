const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const extractSass = new ExtractTextPlugin({
	filename: '[name].[contenthash].css',
	disable: process.env.NODE_ENV === 'development'
})

module.exports = {
	entry: {
		client: './src/ts/src/index.tsx',
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[hash].js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		modules: [
			'node_modules',
			'./src/ts/node_modules',
			'.'
		],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'awesome-typescript-loader',
			},
			{
				test: /\.(scss|sass)$/,
				use: extractSass.extract({
					// fallback: 'style-loader',
					use: [
						{ loader: 'css-loader' },
						{ loader: 'sass-loader' },
					],
				}),
			},
			{
				test: /\.(ttf|eot|svg|woff|woff2)(\?\S*)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {},
					}
				]
			},
		]
	},
	target: 'web',
	context: __dirname,
	node: {
		__filename: true,
	},
	plugins: [
		// new BundleAnalyzerPlugin(),
		new CleanWebpackPlugin(['build']),
		new CheckerPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/html/index.html'),
		}),
		extractSass,
		// new webpack.DefinePlugin({
		// 	'process.env.NODE_ENV': JSON.stringify('production')
		// }),
		// new webpack.optimize.UglifyJsPlugin(),
	],
	// externals: {
	// 	'redux-logger': '{}',
	// },
}