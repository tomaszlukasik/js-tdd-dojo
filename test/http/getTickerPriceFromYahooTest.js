const assert = require('assert');
const getTickerPrice = require('../../lib/http/getTickerPriceFromYahoo');
require('co-mocha');

describe('getTickerPriceFromYahoo', function () {
    it('should return price for ticker', function *() {

        const fetchPrice = function(ticker) {
            assert.equal(ticker, 'A');

            return Promise.resolve('responseA');
        };

        const getCsv = function(response) {
            assert.equal(response, 'responseA');
            return Promise.resolve('csv');
        };

        const extractPrice = function(csv) {
            assert.equal(csv, 'csv');
            return 10;
        };

        const errorHandler = function(e) {
            return 404;
        };

        const result = yield getTickerPrice({fetchPrice, getCsv, extractPrice, errorHandler})('A');

        assert.deepEqual(result, ['A', 10]);
    });
});