const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
module.exports = (app) => {
  router.post( '/saveBlock', bodyParser(), app.controller.home.saveBlock )
  router.get( '/getBlock', app.controller.home.getBlock )
  router.post( '/delBlock', bodyParser(), app.controller.home.delBlock )
  router.post( '/updateBlock', bodyParser(), app.controller.home.updateBlock )
  router.get('/home', app.controller.home.home)
  router.get('/home/:id/:name', app.controller.home.homeParams)
  router.get('/user', app.controller.home.login)
  router.post('/user/register', app.controller.home.register)
  app.use(router.routes()).use(router.allowedMethods())
}