const stockFetch = require('./stockfetch');

// file
const readFile = require('./file/reader')().read;
const extractTickers = require('./file/extracter').extract;
const getTickersFromFile = require('./file/getTickersFromFile');

// http
const fetchPrices = require('./http/fetchPrice')().fetch;
const getPricesFromYahoo = require('./http/getPricesFromYahoo');
const extractPrices = require('./http/extractPriceFromResponse');

const getTickers = getTickersFromFile({readFile, extractTickers});
const getPrices = getPricesFromYahoo({fetchPrices, extractPrices});
const stockfetch = new stockFetch(getTickers, getPrices, console.log);

stockfetch
  .run('./symbols')
  .catch(console.error);
