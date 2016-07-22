const assert = require('assert');
const mocha = require('mocha');

require('co-mocha');

describe('Extract tickers', () => {
  it('should extract tickers', function *() {
    // given
    const tickers = 'USA\nPOL\nFR\nGER';
    const extracter = require('../../lib/file/extracter');

    // when
    const result = extracter.extract(tickers);

    // then
    assert.deepEqual(result, ['USA','POL','FR','GER']);
  });
  it('should extract empty array', function *() {
    // given
    const tickers = '';
    const extracter = require('../../lib/file/extracter');

    // when
    const result = extracter.extract(tickers);

    // then
    assert.deepEqual(result, []);
    extracter.extract(tickers);
  });
});