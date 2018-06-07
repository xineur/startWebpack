#webpack

#####1	入口文件	entry
```
    module.exprots={
		entry:'./main.js'				//单文件入口文件写法
		entry:{							//多文件入口文件写法
			main:'main.js',
			app:'app.js'
		}
	}
```

#####2 出口文件		output
```
	import path from 'path';			//引入path文件，用于解析路径
	module.exprets={
		output:{
			filename: 'boundle.js',		//输出文件名    单文件
			filename: '[name].js',		//输出文件名	多文件
			path: __dirname + '/dist'	//输出路径
		}
	}
```

#####3 模式			mode
```
	development		//为开发提供工具
	production		//在生产模式下的优化
	none			//不使用

	module.exprets = {
		mode: 'development'
	}

```

#####4 loader		用于对模块的源代码进行转换
```
	module.exprets = {
		mould: {						//module.rules 允许你在 webpack 配置中指定多个 loader
			rules: {					
				text: /\.css$/, use: ['style-loader','css-loader']
			}
		}
	}

	//main.js
	import css from './style.css'
```