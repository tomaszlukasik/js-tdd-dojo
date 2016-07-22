function Stockfetch(getTickers, getTickerPrices) {
    this.run = () => {
        const tickers = getTickers();
        return tickers.map((val) => {
            return val + ' ' + getTickerPrices(val);
        });

    }
}

module.exports = Stockfetch;