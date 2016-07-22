function Stockfetch(getTickers, getTickerPrices) {
    this.run = () => {
        const tickers = getTickers();
        const prices = getTickerPrices();
        return tickers.map((val, i) => {
            return val + ' ' + prices[i];
        });

    }
}

module.exports = Stockfetch;