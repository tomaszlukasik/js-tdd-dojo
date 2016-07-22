const assert = require('assert');

describe('stockfetch', () => {
  it('tries to load stockfetch', function() {
    const stockfetch = require('../stockfetch');
  });
  it('should return proper output for happy path', function() {
    const getTickersFromFileMock = () => [
        'GOOGLE', 'YAHOO'
    ];
    const getTickerPricesFromYahoo = (input) => {
      const data = {
        GOOGLE: 666,
        YAHOO: 777
      };

      return data[input];
    };

    const expectedOutput = [
        'GOOGLE 666',
        'YAHOO 777'
    ];

    const Stockfetch = require('../stockfetch');
    const stockfetch = new Stockfetch(getTickersFromFileMock, getTickerPricesFromYahoo);

    const result = stockfetch.run();
    assert.deepEqual(result, expectedOutput);
  });
  it('should return tickers from file', function () {
    const readFile = (data) => {
      assert.equal(data, 'file');
      return Promise.resolve(['fileData']);
    };
    const extractTickers = (data) => {
      assert.equal(data, 'fileData');
      return Promise.resolve('yo');
    };

    const getTickersFromFileMock = require('../getTickersFromFile')({ readFile, extractTickers });

    return getTickersFromFileMock('file');
  });
});