let webpack = require('webpack');
let path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin');
let cleanWebpackPlugin = require('clean-webpack-plugin');
let HappyPack = require('happypack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let os = require('os');

let happyThreadPool = HappyPack.ThreadPool({size: 4})
let resolve = (dir)=>{
	return path.join(path.resolve('./'), dir)
}

const config = {
	entry: {
		main: './main.js'
	},
	output: {
		path: resolve('dist'),
		filename: '[name].[hash].js'
	},
	module: {
		noParse: (content)=>{//规定那些文件不被liader解析
			return /jquery/.test(content)
		},
		rules: [{
			test: /\.js$/,
			use: ['happypack/loader?id=happy'], // 缓存loader执行结果
			exclude: /node_modules/, // 排除不处理的目录
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
			exclude: /node_modules/, // 排除不处理的目录
		}]
	},
	resolve: {
		extensions: ['.js', '.json'],
		modules: [	//优化查找路径
			
		],
		alias: {	//创建import或者require的别名
			'@': resolve('src'),
			'@c': resolve('config')
		}
	},
	plugins: [
		new HappyPack({ // 基础参数设置
	        id: 'happy',
	        loaders: ['babel-loader?cacheDirectory'], // 实际匹配处理的loader
	        threadPool: happyThreadPool,
	        verbose: true
	    }),
	    new htmlWebpackPlugin({
	      	filename: 'index.html',
	      	template: resolve('index.html'),
	      	title: 'webpackpage',
	      	inject: true
	    }),
	    new cleanWebpackPlugin(['dist'],{	//匹配删除的文件
	    	root: path.resolve('./'),		//删除路径
	    	verbose: true,					//是否开启在控制台输出信息
	    }),
	    new ExtractTextPlugin('style.css')
	]
}


module.exports = config;