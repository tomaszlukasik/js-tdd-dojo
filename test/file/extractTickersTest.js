const assert = require('assert');
const extractTickers = require('../../lib/file/extractTickers');

describe('Extract tickers', function () {

    it('should extract valid tickers', function() {
        const symbols = extractTickers('GOOG\nAAPL')

        assert.deepEqual(symbols, ['GOOG', 'AAPL']);
    });

    it('should return empty array from empty content', function() {
        const symbols = extractTickers('');

        assert.deepEqual(symbols, []);
    });

    it('should return empty array from whitespace only content', function() {
        const symbols = extractTickers('   ');

        assert.deepEqual(symbols, []);
    });

    it('should ignore unexpected format in content', function() {
        const symbols = extractTickers('AAPL   \nGOOG\n\n   ');

        assert.deepEqual(symbols, ['GOOG']);
    });
});