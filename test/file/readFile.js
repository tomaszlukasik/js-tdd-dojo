const assert = require('assert');
const mocha = require('mocha');
const td = require('testdouble');

require('co-mocha');

describe('Read file', () => {
  it('[integration-test] should read data from file', function *() {
    // given
    const fileName = __dirname + '/symbols';
    const reader = require('../../lib/file/reader')();

    // when
    const data = yield reader.read(fileName);

    // then
    assert.ok(data);
  });
  it('[integration-test] should throw an error if file doesnt exist', function *() {
    // given
    const fileName = __dirname + '/fileDoesNotExist';
    const reader = require('../../lib/file/reader')();

    // when
    try {
      yield reader.read(fileName);
    } catch (e) {
      // then
      assert.ok(e);
    }
  });
  it('[unit-test] should read file', function *() {
    // given
    const file = __dirname + '/symbols';
    const fs = {
      readFile: (fileName, encoding, cb) => {
        assert.equal(fileName, file);
        assert.equal(encoding, 'utf8');
        cb(null, 'data');
      }
    };
    const reader = require('../../lib/file/reader')({fs});

    const data = yield reader.read(file)

    assert.ok(data);
  });
  it('[unit-test] should throw error', function *() {
    // given
    const file = __dirname + '/fileDoesNotExist';
    const fs = {
      readFile: (fileName, encoding, cb) => {
        assert.equal(fileName, file);
        assert.equal(encoding, 'utf8');
        cb(new Error());
      }
    };
    const reader = require('../../lib/file/reader')({fs});

    // when
    try {
      yield reader.read(file);
    } catch (e) {
      // then
      assert.ok(e);
    }
  });
});