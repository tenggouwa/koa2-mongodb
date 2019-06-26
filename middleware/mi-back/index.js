module.exports = (type, data = null, msg = '') => {
  const response = {
    code: type === 0 ? 0 : 1,
    msg: type === 0 ? 'success' : msg,
    data
  }
  return response;
}