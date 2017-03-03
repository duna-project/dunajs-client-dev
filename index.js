var client = require('dunajs-client')
var nock = require('nock')

module.exports.mock = (c) => new Proxy({ uri: c.uri }, {
  get: (t, a) => (...args) => {
    if (args.length !== 1) throw new Error('Only one argument is allowed')
    let ea = typeof args[0] === 'object' ? client.encode(args) : args[0]
    if (client.isPostMethod(a)) {
      return nock(t.uri).post('/' + client.postMethodName(a), ea)
    }
    return nock(t.uri).get('/' + a).query(ea)
  }
})
