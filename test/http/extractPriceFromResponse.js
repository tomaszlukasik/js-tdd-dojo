const assert = require('assert');
const mocha = require('mocha');
const fs = require('fs');

require('co-mocha');

describe('Extract price from response', () => {
  it('should extract price from first row', function *() {
    // given
    const data = fs.readFileSync(__dirname + '/response', 'utf-8');
    const extractPrice = require('../../lib/http/extractPriceFromResponse');
    const response = {
      statusCode: 200,
      body: data
    };

    // when
    const price = extractPrice(response);

    // then
    assert.equal(price, 740.359985);
  });
});