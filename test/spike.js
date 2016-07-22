const assert = require('assert');


describe('stockfetch', () => {
  it('tries to load stockfetch', function() {
    const stockfetch = require('../stockfetch');
  });
  it('should return proper output for happy path', function() {
    const getTickersFromFileMock = () => [
        'GOOGLE', 'YAHOO'
    ];
    const getTickerPricesFromYahoo = input => {
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

  it('getTickersFromFile', function() {
    const input = {
      readFile: () => 'A\nB\nC\n',
      extractTickers: stringInput => ['A', 'B', 'C'],
    };

    const getTickerFromFile = require('../getTickerFromFile')(input);
    assert.deepEqual(getTickerFromFile.get(), ['A', 'B', 'C']);
  });
});