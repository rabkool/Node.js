//接受命令行参数

// console.log(process.argv);

var num1 = parseInt(process.argv[2]); //process.argv[2] - 0 减0后字符串成数
var num2 = parseInt(process.argv[3]);

var sum = num1 + num2;

console.log("计算中。。。");

//setTimeout 延迟函数
setTimeout(()=>{
	console.log(sum);
},1000)