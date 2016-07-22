function getTickersFromFile ({ readFile, extractTickers }) {
  return (file) => readFile(file).then(extractTickers);
}

module.exports = getTickersFromFile;