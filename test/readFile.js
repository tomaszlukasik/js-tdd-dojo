const assert = require('assert');
const mocha = require('mocha');
require('co-mocha');

const fs = require('fs');

describe('readFile', function () {
  it('integration happypath', function *() {
    const readFile = require('../lib/readFile');

    const results = yield readFile('./readFile.txt');
    assert(results, 'ASS\nBOOBS\nCYCKI\n');
  });
});