module.exports = function({readFile, extractTickers}) {
    return function (fileName) {
        return readFile(fileName).then(extractTickers)
    };
};