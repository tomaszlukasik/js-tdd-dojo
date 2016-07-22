const assert = require('assert');
const mocha = require('mocha');
require('co-mocha');

describe('stockfetch', function () {
  it('happypath', function () {
    const getTickersFromFile = function (file) {
      assert.equal(file, './symbolsFile');
      return Promise.resolve(['A', 'B', 'C']);
    };

    const getTickerPricesFromYahoo = function (tickers) {
      assert.deepEqual(tickers, ['A', 'B', 'C']);
      return Promise.resolve([10, 20, 30]);
    };

    const printReport = function (prices) {
      assert.deepEqual(prices, [10, 20, 30]);
    };

    const stockfetch = require('../lib/stockfetch')({
      getTickersFromFile,
      getTickerPricesFromYahoo,
      printReport
    });

    return stockfetch('./symbolsFile');
  });

});

describe('getTickerFromFile', function () {
  it('happypath', function *() {
    const readFile = path => {
      assert.equal(path, './symbolsFile');
      return Promise.resolve('A\nB\nC\n');
    };

    const extractTickers = tickersString => {
      assert.equal(tickersString, 'A\nB\nC\n');
      return ['A', 'B', 'C'];
    };

    const getTickersFromFile = require('../lib/getTickersFromFile')({ readFile, extractTickers });

    const tickers = yield getTickersFromFile('./symbolsFile');
    assert.deepEqual(tickers, ['A', 'B', 'C']);
  });
});