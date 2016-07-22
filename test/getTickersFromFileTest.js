const assert = require('assert');
const mocha = require('mocha');

describe('getTickersFromFile', function () {
    it('should extract tickers from file', function () {
        const readFile = function(fileName) {
            assert.equal(fileName, 'someFile');
            return Promise.resolve('file content');
        };
        const extractTickers = function(fileContent) {
            assert.equal(fileContent, 'file content');
            return ['A', 'B', 'C'];
        };

        const getTickersFromFile = require('../lib/getTickersFromFile')({readFile, extractTickers});

        return getTickersFromFile('someFile').then(function(tickers) {
            assert.deepEqual(tickers, ['A', 'B', 'C']);
        });
    });

});