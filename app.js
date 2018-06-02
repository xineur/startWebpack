 //es   molude
import esmould from './esmould'

console.log('esmould'+esmould(1,2));

//commos
var commons = require('./common');

console.log('commons'+commons(2,1));

//amd
require(['amd'],(amd)=>{
	console.log(amd(1,2));
})