const assert = require('assert');
const mocha = require('mocha');

require('co-mocha');

describe('Get prices from yahoo', () => {
  it('should return prices from yahoo for tickers', function *() {
    // given
    const prices = ['A','B'];
    const fetchPrices = (prices) => {
      assert.deepEqual(prices, ['A', 'B']);
      return Promise.resolve(['responseA', 'responseB']);
    };
    const extractPrices = (responses) => {
      assert.deepEqual(responses, ['responseA', 'responseB']);
      return [10, 20];
    };
    const getPricesFromYahoo = require('../../lib/http/getPricesFromYahoo')({ fetchPrices, extractPrices });

    // when
    const results = yield getPricesFromYahoo(prices);

    // then
    assert.deepEqual(results, [['A', 10], ['B', 20]]);
  });
});