const assert = require('assert');
const extractPrice = require('../../lib/http/extractPrice');

describe('extracts price', function() {
    it('extracts price', function() {
        const csv = 'Date,Open,High,Low,Close,Volume,Adj Close\n' +
            '2016-07-21,740.359985,741.690002,735.830994,738.630005,969100,738.630005\n' +
            '2016-07-20,737.330017,742.130005,737.099976,741.190002,1278100,741.190002\n' +
            '2016-07-19,729.890015,736.98999,729.00,736.960022,1222600,736.960022';

        const result = extractPrice(csv);

        assert.equal(result, 740.359985);
    });
});