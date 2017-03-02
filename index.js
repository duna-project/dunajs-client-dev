var client = require('dunajs-client')
var nock = require('nock')

module.exports.mock = (c) => new Proxy({ uri: c.uri }, {
  get: (t, a) => (...args) => {
    if (client.isPostMethod(a)) {
      return nock(t.uri).post('/' + client.postMethodName(a), client.encode(args))
    }
    return nock(t.uri).get('/' + a).query(client.encode(args))
  }
})
