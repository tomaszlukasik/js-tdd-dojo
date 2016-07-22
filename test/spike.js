const assert = require('assert');

describe('stockfetch', () => {
  it('tries to load stockfetch', function() {
    const stockfetch = require('../stockfetch');
  });
  it('should return proper output for happy path', function() {
    const getTickersFromFileMock = () => [
        'GOOGLE', 'YAHOO'
    ];
    const getTickerPricesFromYahoo = () => [
        666, 777
    ];
    const expectedOutput = [
        'GOOGLE 666',
        'YAHOO 777'
    ];

    const Stockfetch = require('../stockfetch');
    const stockfetch = new Stockfetch(getTickersFromFileMock, getTickerPricesFromYahoo);

    const result = stockfetch.run();
    assert.deepEqual(result, expectedOutput);
  });
});