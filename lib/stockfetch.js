function Stockfetch(getTickers, getTickerPrices, printReport) {
  this.run = (fileName) => {
    return getTickers(fileName)
      .then(getTickerPrices)
      .then(printReport);
  }
}

module.exports = Stockfetch;