const mypath ='./rabkool.txt'
const fs = require('fs');

//同步读取
fs.readFileSync(mypath);
console.log('1');
console.log('完成');

//异步
fs.readFile(mypath,()=>{
	console.log('异步读取后');
});
console.log('2');