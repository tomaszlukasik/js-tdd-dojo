function fetchPrice(opts = {}) {
  const request = opts.request || require('request');
  const url = opts.url || '';

  return {
    fetch: (tickers) => {
      let promises = [];
      tickers.forEach(tick => promises.push(request(url + tick)));
      return Promise.all(promises);
    }
  }
}

module.exports = fetchPrice;