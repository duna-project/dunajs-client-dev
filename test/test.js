var client = require('dunajs-client')
var mock = require('..').mock
var assert = require('assert')

var c = client.create('http://teste')

it ('should make mock request', () => {
  mock(c).m().reply(200, 'ok')
  return c.m().then(data => assert.equal('ok', data))
})

it ('should make mock post request', () => {
  mock(c).mǃ().reply(200, 'ok')
  return c.mǃ().then(data => assert.equal('ok', data))
})

it ('should encode args', () => {
  mock(c).m({a: 1, b: {c: 2}}).reply(200, 'ok')
  return c.m({a: 1, b: {c: 2}}).then(data => assert.equal('ok', data))
})
