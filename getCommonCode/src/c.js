// import('./a.js').then((a,b)=>{
// 	a()//this is a
// });

import(/* webpackChunkName:'a' */'./a.js').then((a,b)=>{
	a()
});
import(/* webpackChunkName:'b' */'./b.js').then((a,b)=>{
	a()
});