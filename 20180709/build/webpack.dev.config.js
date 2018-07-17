let webpack = require('webpack');
const path = require('path');

function resolve(dir){
	return path.join(path.resolve('./'), dir)
}

console.log(resolve('dist'))
module.exports = {
    plugins: [
       new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: resolve('dist'),
        // compress: true,
        port: 9000,
        
        // noInfo: false,
    },
    module: {
		rules: [{
			test: /\.css$/,
			use: ["style-loader", "css-loader"],
			exclude: /node_modules/, // 排除不处理的目录
		}]
	},
};