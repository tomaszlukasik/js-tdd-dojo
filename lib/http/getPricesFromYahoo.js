const zip = require('lodash.zip');

module.exports = function ({fetchPrices, extractPrices}) {
  return function (tickers) {
    return fetchPrices(tickers)
      .then(res => extractPrices(res))
      .then(prices => zip(tickers, prices));
  }
};