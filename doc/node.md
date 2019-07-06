## **Hello World/クソ世界** 

- 创建JavaScript文件
  - 输入Hello World
- 终端运行文件
- 输入 `node 文件名`  执行对应文件
- p.s.
  - var定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。
  - let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。
  - const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改。

## 内置对象

#### 分类

- 全局对象：随便访问
- 核心对象： 向系统引入
- 自定义对象：按路径引入

#### process(全局对象)

- 获取环境变量
  - process.argv 获取命令行参数

#### filename/dirname（全局对象）

- __filename 获取当前运行文件的目录,绝对路径
- __dirname 当前运行文件的绝对路径

#### node.js实现规范

- CommonJS : 规范JavaScript作为后端语言运行的标准
  - 如何写模块 Module:
    - 依赖一个模块	require('模块名(id)')
    - 需要被模块依赖 module.exports = 给外部的数据
    - 一个文件是一个模块

#### 核心对象path

-  `const path = requore('path');`

- 路径 不负责判断路径是否存在文件

- 拼接并修正路径`path.join(__dirname,'a','b');`当前路径/a/b

- `path.resovle('./xxx')相对转绝对`

- 接受一个合法路径字符串转成一个对象

  - `let str = path.format(pathObj);`

    ```javascript
    {root: 'c:\\',
     dir: 'c:\\user\\rabkool',
     ext: '.txt',
     name: 'rabkool'}
    ```
    

-  parse解析成对象，format转成字符串,join拼接修正

- 对于修改路可以用bass属性更改，不能用name，ext更改

#### 操作文件对象

- IO

  - I : input 输入
  - O : output 输出
  - 文件操作就是IO

- 复制文件过程 I : 通过电脑存储文件复制

  - 黏贴到指定目录 : O : 通过电脑将复制数据写出到指定目录

- node中有两种IO的操作

  - 同步IO

    - 一行代码读写文件未完成时后续代码无法执行

  - 异步IO

    - 一行代码正在读写中后续代码也可以执行

  - 代码

    - 读写文件

    - 代码

      ```javascript
      const fs = require(`fs`) //必须名称 引入fs
      //读 fs.readFile(路径名,回调函数);
      //写 fs.writeFile(路径,数据,回调函数);
      ```

    - p.s.

      - window中目录层级多的时候,写入会报错

- 同步异步区别 : 

  - 同步 : IO会阻赛后续代码执行
  - 异步 : IO不会阻赛后续代码执行

  

 



