module.exports = function ({readFile, extractTickers}) {
    return function(file) {
        return readFile(file).then(function(fileContent) {
            return extractTickers(fileContent);
        });
    }
};