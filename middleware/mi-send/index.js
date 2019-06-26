module.exports = () => {
  function render(json) {
      this.set("Content-Type", "application/json")
      this.body = JSON.stringify(json)
  }
  return async (ctx, next) => {
      ctx.send = render.bind(ctx)
      // 调用ctx上的log方法下的error方法打印日志
      ctx.log.error('ikcamp');
      await next()
  }
}