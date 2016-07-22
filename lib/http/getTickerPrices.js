module.exports = function(getTickerPrice) {
    return tickers => Promise.all(tickers.map(getTickerPrice));
};
