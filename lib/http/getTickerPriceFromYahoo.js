module.exports = function({fetchPrice, getCsv, extractPrice, errorHandler}) {
    return (ticker) => {
        return fetchPrice(ticker)
            .then(getCsv)
            .then(extractPrice)
            .catch(errorHandler)
            .then(price => [ticker, price])
    };
};
