// 引入规则中件间
const miRule = require('./mi-rule')
const path = require('path')

module.exports = (app) => {
  /**
   * 在接口的开头调用
   * 指定 controller 文件夹下的 js 文件，挂载在 app.controller 属性
   * 指定 service 文件夹下的 js 文件，挂载在 app.service 属性
   */ 
  miRule({
    app,
    rules: [
      {
        folder: path.join(__dirname, '../controller'),
        name: 'controller'
      },
      {
        folder: path.join(__dirname, '../service'),
        name: 'service'
      }
    ]
  })

  // 以下代码省略
}