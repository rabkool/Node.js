// 引入核心对象
const fs = require('fs');

// 先读后写
let data = fs.readFileSync('./rabkool.txt','utf8');
console.log(data);

// 写入到rabkooool.txt
fs.writeFileSync('./rabkooool.txt',data);