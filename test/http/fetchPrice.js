const assert = require('assert');
const mocha = require('mocha');
const goodGuy = require('good-guy-http');

require('co-mocha');

describe('Fetch price', () => {
  it.skip('should fetch a symbol from url', function *() {
    // given
    const givenTickers = ['GOOG'];
    const request = goodGuy();
    const url = 'http://ichart.finance.yahoo.com/table.csv?s=';
    const fetchPrice = require('../../lib/http/fetchPrice')({request, url});

    // when
    const prices = yield fetchPrice.fetch(givenTickers);

    // then
    assert.deepEqual(prices, [12,12,12]);
  });
  it('should fetch prices from mocked request', function *() {
    // given
    const givenTickers = ['A', 'B', 'C'];
    const request = (ticker) => {
      return Promise.resolve(12);
    };
    const fetchPrice = require('../../lib/http/fetchPrice')({request});

    // when
    const prices = yield fetchPrice.fetch(givenTickers);

    // then
    assert.deepEqual(prices, [12,12,12]);
  });
});