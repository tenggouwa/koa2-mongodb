const mongoose = require('mongoose')
const Koa = require('koa')
const path = require('path')
const fs = require('fs')
const bodyParser = require('koa-bodyparser')
// const nunjucks = require('koa-nunjucks-2')
const cors = require('koa2-cors')
const staticFiles = require('koa-static')
const middleware = require('./middleware')
const router = require('./router')
const app = new Koa()

// 一定放在koa前面
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://127.0.0.1/tenggouwa',{useNewUrlParser: true})
// 获取数据库表对应的js对象所在的路径
const models_path = path.join(__dirname, './models')

// 已递归的形式，读取models文件夹下的js模型文件，并require
var walk = function(modelPath) {
  fs
    .readdirSync(modelPath)
    .forEach(function(file) {
      var filePath = path.join(modelPath, '/' + file)
      var stat = fs.statSync(filePath)

      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
          require(filePath)
        }
      }
      else if (stat.isDirectory()) {
        walk(filePath)
      }
    })
}

walk(models_path)

// 自定义中间件
middleware(app)

app.use(cors())
// 指定 public目录为静态资源目录，用来存放 js css images 等
app.use(staticFiles(path.resolve(__dirname, "./public")))


// 使用模板引擎
// app.use(nunjucks({
//   ext: 'html',
//   path: path.join(__dirname, 'views'),// 指定视图目录
//   nunjucksConfig: {
//     trimBlocks: true // 开启转义 防Xss
//   }
// }));

// 解析post请求
app.use(bodyParser())

// 使用koa-router
router(app)

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})