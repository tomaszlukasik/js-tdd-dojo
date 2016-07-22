const assert = require('assert');

describe('Get tickets from file', () => {
  it('should return tickers from file', function () {
    const readFile = (data) => {
      assert.equal(data, 'file');
      return Promise.resolve('fileData');
    };
    const extractTickers = (data) => {
      assert.equal(data, 'fileData');
      return Promise.resolve('yo');
    };

    const getTickersFromFileMock = require('../getTickersFromFile')({ readFile, extractTickers });

    return getTickersFromFileMock('file').then(result => {
      assert.equal(result, 'yo');
    });
  });
});