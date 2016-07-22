const assert = require('assert');
const mocha = require('mocha');

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

        const printReport = function(prices) {
            assert.deepEqual(prices, [10, 20, 30]);
        };

        const stockfetch = require('../lib/stockfetch')({getTickersFromFile, getTickerPricesFromYahoo, printReport});

        return stockfetch('./symbolsFile');
    });

});