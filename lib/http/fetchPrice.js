function fetchPrice(opts = {}) {
  const request = opts.request || require('good-guy-http')();
  const url = opts.url || 'http://ichart.finance.yahoo.com/table.csv?s=';

  return {
    fetch: (tickers) => {
      let promises = [];
      tickers.forEach(tick => promises.push(request(url + tick)));
      return Promise.all(promises);
    }
  }
}

module.exports = fetchPrice;