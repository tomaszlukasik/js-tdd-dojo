module.exports = function ({request}) {
    const url = 'http://ichart.finance.yahoo.com/table.csv?s=';

    return function (ticker) {
        return request(url + ticker);
    }
};
