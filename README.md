# Basic usage

```javascript
var client = request('dunajs-client')
var mock = request('dunajs-client-dev').mock

var c = client.create('some-service-endpoint')
mock(c).m({arg1: 1, arg2: 'a'}).reply(200, 'ok')
c.m({arg1: 1, arg2: 'a'}).then(data => { console.log(data) })
```
