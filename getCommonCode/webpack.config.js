const webpack = require('webpack');
const path = require('path');


const config = {
	entry:{
		c: './src/c.js',
		d: './src/d.js',
		ventor 'jquery'
	},
	output:{
		path: path.resolve(__dirname,'./dist'),
		filename: '[name].boundle.js',
		chunkFilename: '[name].common.js'
	},
 	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',//chunk名稱
			//filename: ,//打包后的名字
			minChunks: 2,//提取公共代碼出現的次數
			//chunks: ,//提取代碼的範圍
			//children: ,//
			//deepChildren: ,//
			//assync: ''//創建一個異步的公共代碼塊
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'ventor',//chunk名稱
			minChunks: Infinity,
		})
	]
}

module.exports = config