const assert = require('assert');
const mocha = require('mocha');
require('co-mocha');

describe('getTickersFromFile', function () {
    it('should extract tickers from file', function *() {
        // given
        const readFile = function(fileName) {
            assert.equal(fileName, 'someFile');
            return Promise.resolve('file content');
        };
        const extractTickers = function(fileContent) {
            assert.equal(fileContent, 'file content');
            return ['A', 'B', 'C'];
        };

        const getTickersFromFile = require('../../lib/file/getTickersFromFile')({readFile, extractTickers});

        // when
        const tickers = yield getTickersFromFile('someFile');

        // then
        assert.deepEqual(tickers, ['A', 'B', 'C']);
    });

});