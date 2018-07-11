const webpack = require('webpack');
const path = require('path');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let cssStyle = new ExtractTextPlugin('/static/css/[name].css');
//let CopyWebpacPlugin = require('copy-webpack-plugin');

let resolve = (dir)=>{
	return path.join(path.resolve,dir)
}

module.exports = {
	mode: 'production',
    plugins: [
        new ParallelUglifyPlugin({
            workerCount: 4, // 开启几个子进程去并发的执行压缩，默认是当前电脑的cpu数量减1
            uglifyJS: {
                output: {
                    beautify: false, // 不需要格式化
                    comments: false // 保留注释
                },
                compress: {
                    warnings: false, // Uglifyjs 删除没有代码时，不输出警告
                    // drop_console: true, // 删除所有console语句
                    collapse_vars: true,
                    reduce_vars: true
                }
            }
        }),
		cssStyle,
//		new CopyWebpacPlugin({
//			from: resolve('dist'),
//			to: resolve('dist/assets'),
//			toType: 'dir'
//		})
    ],
    module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			}),
			exclude: /node_modules/, // 排除不处理的目录
		}]
	},
};