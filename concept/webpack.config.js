const path = require('path');
const config = {
	entry: './main.js',   	//入口文件
	output:{				//出口
		path: path.resolve(__dirname, 'dist'),	//出口位置
		filename: 'bundle.js'		//出口文件名
	},
	module:{
		rules:[{
			test:/\.css$/,use:'css-loadel'
		}]
	}
};


module.exports = config;