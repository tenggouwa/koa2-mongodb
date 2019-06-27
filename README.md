## Koa2 + mongodb 简易后端脚手架

> Author: Tenggouwa


> Date: 2019.06.26

### 项目简介

为了方便业务开发，所搭建的 **koa + mongodb** 脚手架，使用较为主流的内容搭建。


### 环境搭建

 + node
   + node官方下载地址: https://nodejs.org/zh-cn/download/
 + mongodb
   + mac下mongodb安装教程: https://www.jianshu.com/p/7241f7c83f4a
   + windows下mongodb安装教程: https://blog.csdn.net/zhongkaigood/article/details/81475904
   + robomongo(mongodb数据库可视化--免费): https://robomongo.org/download
 + koa-bodyparser
   + 处理post请求返回的数据
   + npm: https://www.npmjs.com/package/koa-bodyparser
 + koa2-cors
   + 处理跨域问题
   + npm: https://www.npmjs.com/package/koa2-cors
 + koa-static
   + 处理静态文件所需
   + npm: https://www.npmjs.com/package/koa-static
 + koa-router
   + 处理koa路由
   + npm: https://www.npmjs.com/package/koa-router
 + 本地安装nodemon
   + nodemon会监听你的代码，当有变动的时候自动帮你重启项目
   + npm: https://www.npmjs.com/package/nodemon
 + yarn(选装)---代替npm/cnpm
 + homebrew(选装)---包版本管理工具

### 项目运行 

+ `yarn`或者`cnpm i`或者`npm i`
+ `nodemon app`或者`node app`
+ 本地访问localhost:3000/getBlock或根据router.js使用postman测试

### 项目结构


目录 | 说明
 :-: | :-:
/controller|控制层相关文件(提供接口)
/middleware|中间件-可以使用第三方以及自己封装的
/models|数据库模型(传统意义上的表结构)
/views|视图层(可以使用模板引擎展现视图)
/app.js|主要的入口文件(引入一些第三方内容)
/package.json|项目的包管理
/router.js|路由地址，输出接口地址


### mongoDB操作

+ 保存数据
  + `save()`
+ 查取数据
  + 查询 `find()`   `finOne()`
  + `where()`
+ 更改数据
  + `where().update()`
+ 删除数据
  + `where().remove()`
+ 排序
  + `find().sort()`
+ 分页
  + `find().sort().skip(页码).limit(单页数据)`






未完待续