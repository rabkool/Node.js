// 引入核心对象
const path = require('path'); //path没有写路径 代表和核心对象 path在node.exe 里面

//加路径
//const myPath = path.join(__dirname, '/////1','2/////','/3/');

//console.log(myPath);

//根据相对路径返回绝对路径

// const str = 'rabkool/rabkool.js'
// let temp = path.resolve(str);
// console.log(temp);

//接受一段字符串路径

let myPath = path.join(__dirname, 'user','rabkool','rabkool.txt');

//解析路径为对象
let pathObj = path.parse(myPath);
//console.log(pathObj)

pathObj.base = 'rabkool.md';
//console.log(pathObj);

//接受对象转成成字符串
myPath = path.format(pathObj);
console.log(myPath);