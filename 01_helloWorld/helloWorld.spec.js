const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld('World')).toEqual('Hello, World!');
  });
  test('says "Hello, World!"', function() {
    expect(helloWorld('wORld')).toEqual('Hello, World!');
  });
  test('says "Hello, World!"', function() {
    expect(helloWorld('WoRLD')).toEqual('Hello, World!');
  });
});
