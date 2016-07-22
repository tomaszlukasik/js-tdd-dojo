const assert = require('assert');
const mocha = require('mocha');

describe('StockFetch', () => {
  it('tries to load stockfetch', function () {
    const stockfetch = require('../lib/stockfetch');
  });
  it('should return proper output for happy path', function () {
    const getTickersFromFileMock = () => [
      'GOOGLE', 'YAHOO'
    ];
    const getTickerPricesFromYahoo = (input) => [666, 777];

    const expectedOutput = [
      'GOOGLE 666',
      'YAHOO 777'
    ];

    const Stockfetch = require('../lib/stockfetch');
    const stockfetch = new Stockfetch(getTickersFromFileMock, getTickerPricesFromYahoo);

    const result = stockfetch.run();
    assert.deepEqual(result, expectedOutput);
  });
});