const assert = require('assert');
const getTickerPrices = require('../../lib/http/getTickerPrices');
require('co-mocha');

describe('getTickerPrices', function () {
    it('should return tickers with prices', function *() {
        const prices = {
            'A': 10,
            'B': 20
        };

        const getTickerPrice = function(ticker) {
            assert.notEqual(Object.keys(prices).indexOf(ticker), -1);
            return Promise.resolve([ticker, prices[ticker]]);
        };

        const result = yield getTickerPrices(getTickerPrice)(['A', 'B']);

        assert.deepEqual(result, [['A', 10], ['B', 20]]);
    });
});