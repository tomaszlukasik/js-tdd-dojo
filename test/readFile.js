const assert = require('assert');
const mocha = require('mocha');

require('co-mocha');

describe('Read file', () => {
  it('[integration-test] should read data from file', function *() {
    // given
    const fileName = __dirname + '/symbols';
    const reader = require('../lib/reader');

    // when
    const data = yield reader.read(fileName);

    // then
    assert.ok(data);
  });
  it('[integration-test] should throw an error if file doesnt exist', function *() {
    // given
    const fileName = __dirname + '/fileDoesNotExist';
    const reader = require('../lib/reader');

    // when
    try {
      yield reader.read(fileName);
    } catch (e) {
      // then
      assert.ok(e);
    }
  });
});