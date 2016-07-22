const zip = require('lodash.zip');

module.exports = function({fetchPrices, extractPrices}) {
  return function(tickers) {
    return fetchPrices(tickers)
      .then(res => extractPrices(res))
      .then(function(prices) {
      return zip(tickers, prices);
    });
  }
};