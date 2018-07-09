

const config = {
	/**
	 * 入口文件
	 * 	可选格式:
	 * 		Array(['main.js','index.js']),String('index.js'),Object({m:main.js})
	 * **/
	entry: {
		main: '@/main.js',
		index: '@/index.js'
	},
	/**
	 * 出口文件
	 * 	参数
	 * 		{path: String}输出的目录,处于根目录
	 * 		{: Boolean}是否启用hash
	 * **/
//	output: {
//		path,
//		hash
//	},
}


module.exports = config
