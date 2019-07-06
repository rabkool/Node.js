//引入fs
const fs = require('fs');

// 读取文件
// 地址,回掉函数（err，读到数据
// fs.readFile('./rabkool.txt',(err, data)=>{
// 地址,读取编码方法，箭头函数（err，读到数据
//  fs.readFile('./rabkool.txt','UTF8',(err,data)=>{

// 	if (err) throw err; //抛到控制台显示异常
// 	console.log(data);

// 	//不设置获取编码方法,获取的数据为16进制数 想要获取字符串需要调用buffer的.toString(需要的编码)
// 	console.log(data.toString('UTF8'));
// });

// 写入文件  
// writeFile('push',data,callback,{flag:'a'}   {flag:'a'} : 可选参数追加写入  a : append 
fs.writeFile('./rabkool.txt','HolleWorld',{flag:'a'}, (err)=>{
	if (err) throw err;
	console.log('已经写入');
});

//追加范式1 : appendFile('push',data,callback);
// fs.appendFile('./rabkool.txt','HolleWorld',(err)=>{
// 	if(err) throw err;
// 	console.log('写入');
// });

