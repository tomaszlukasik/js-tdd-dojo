module.exports = function({fetchPrice, getCsv, extractPrice}) {
    return (ticker) => {
        return fetchPrice(ticker)
            .then(getCsv)
            .then(extractPrice)
            .catch(e => e.statusCode)
            .then(price => [ticker, price])
    };
};
