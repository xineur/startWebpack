const path = require('path');
var name = Math.random().toString(36,2).split('.')[1];
const config = {
	mode: 'development',		// "production" | "development" | "none"
	entry: ['./app.js','./main.js'],   	//入口文件
	output:{				//出口
		path: path.resolve(__dirname, 'dist'),	//出口位置
		filename: '[chunkhash].js'	//出口文件名
	},
	module:{
		rules:[{
			test:/\.css$/,use:['style-loader','css-loader']
		}]
	}
};




module.exports = config;