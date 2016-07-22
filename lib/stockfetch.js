module.exports = function({getTickersFromFile, getTickerPricesFromYahoo, printReport}) {
  return function (fileName) {
    return getTickersFromFile(fileName).then(getTickerPricesFromYahoo).then(printReport)
  };
};