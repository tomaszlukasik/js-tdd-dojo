const assert = require('assert');
const mocha = require('mocha');

describe('right pad', function () {
  const rightPad = require('../lib/rightPad');
  it('should fill in spaces', function () {
    assert.equal(rightPad('test', ' ', 5), 'test ');
  });
});