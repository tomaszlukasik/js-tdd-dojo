const assert = require('assert');
const fetchPrices = require('../../lib/http/fetchPrices');

describe('fetch prices', function() {
    it.skip('[integration test] should fetch a symbol', function *() {
        const request = require('good-guy-http')();
        const fetch = fetchPrices({request});

        const result = yield fetch('GOOG');

        assert.equal(result.statusCode, 200);
    });

    it('[unit test] should fetch a symbol', function *() {
        const request = function(url) {
            return url.endsWith('INVALID') ? Promise.reject({statusCode: 404}) : Promise.resolve({statusCode: 200});
        };
        const fetch = fetchPrices({request});

        let result = yield fetch('GOOG');
        assert.equal(result.statusCode, 200);
        fetch('INVALID')
            .catch(function(e) {
                assert.equal(e.statusCode, 404);
            });
    });

});