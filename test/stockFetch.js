const assert = require('assert');
const mocha = require('mocha');

describe('StockFetch', () => {
  it('tries to load stockfetch', function () {
    const stockfetch = require('../lib/stockfetch');
  });
  it('should return proper output for happy path', function () {
    const getTickersFromFileMock = () => Promise.resolve([
      'GOOGLE', 'YAHOO'
    ]);
    const getTickerPricesFromYahoo = (input) => Promise.resolve([666, 777]);
    const printReport = (results) => {
      assert.deepEqual(results, [666, 777]);
    };

    const Stockfetch = require('../lib/stockfetch');
    const stockfetch = new Stockfetch(getTickersFromFileMock, getTickerPricesFromYahoo, printReport);

    return stockfetch.run();
  });
});