const miBack = require('../middleware/mi-back')
const mongoose = require("mongoose");
const Block = mongoose.model('Block')
module.exports = {
  index: async(ctx, next) => {
    // console.log(ctx)
  },
  // 存入数据库
  saveBlock: async(ctx, next) => {
    const params = ctx.request.body
    const { peers, blocks } = params
    if (peers && blocks) {
      try {
        let block = new Block({
          peers,
          blocks
        })
        block = block.save()
        ctx.body = miBack(0, null)
      } catch (e) {
        ctx.body = miBack(1, null, e)
      }
    } else {
      ctx.body = miBack(1, null, '参数错误')
    }
  },
  getBlock: async(ctx, next) => {
    const block = await Block.find((err, item) => {
      console.log(item)
    })
    if (block) {
      ctx.body = miBack(0, block, 'success')
    } else {
      ctx.body = miBack(1, null, '暂无数据')
    }
  },
  delBlock: async(ctx, next) => {
    const params = ctx.request.body
    const result = await Block.where({
      _id: params.id
    }).remove()
    try {
      await result
      ctx.body = miBack(0, null)
    } catch (error) {
      ctx.body = miBack(1, null, 'fuck')
    }
  },
  updateBlock: async(ctx, next) => {
    const params = ctx.request.body
    const result = await Block.where({
      _id: params.id
    }).update({
      peers: params.peers,
      blocks: params.blocks
    })
    try {
      await result
      ctx.body = miBack(0, null)
    } catch (error) {
      ctx.body = miBack(1, null, 'fuck')
    }
  },
  home: async(ctx, next) => {
    ctx.response.body = '<h1>HOME page</h1>'
  },
  homeParams: async(ctx, next) => {
    ctx.response.body = '<h1>HOME page /:id/:name</h1>'
  },
  login: async(ctx, next) => {
    await ctx.render('home/login', {
      btnName: 'GoGoGo'
    })
  },
  register: async(ctx, next) => {
    // 解构出 app 实例对象
    const { app } = ctx

    let params = ctx.request.body
    let name = params.name
    let password = params.password

    // 留意 service 层的调用方式
    let res = await app.service.home.register(name,password)
    if(res.status == "-1"){
      await ctx.render("home/login", res.data)
    }else{
      ctx.state.title = "个人中心"
      await ctx.render("home/success", res.data)
    }
  }
}