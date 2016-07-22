const assert = require('assert');
const mocha = require('mocha');

require('co-mocha');

describe('Print report', () => {
  it('should print pretty log', function *() {
    // given
    const printReport = require('../lib/printReport');
    const result = [['A', 10],['B', 20]];
    // when
    const log = printReport(result);
    // then
    assert.ok(log);
  });
  it('should sort by price DESC', function *() {
    // given
    const printReport = require('../lib/printReport');
    const result = [['A', 100],['B', 20]];
    // when
    const log = printReport(result);
    // then
    assert.deepEqual(log[0], ['B', 20]);
  });
});
