const assert = require('assert');
const mocha = require('mocha');

require('co-mocha');

describe('Get tickets from file', () => {
  it('should return tickers from file', function *() {
    // given
    const readFile = (data) => {
      assert.equal(data, 'file');
      return Promise.resolve('fileData');
    };
    const extractTickers = (data) => {
      assert.equal(data, 'fileData');
      return Promise.resolve('yo');
    };
    const getTickersFromFileMock = require('../lib/getTickersFromFile')({ readFile, extractTickers });

    // when
    const tickers = yield getTickersFromFileMock('file');

    // then
    assert.equal(tickers, 'yo');
  });
});