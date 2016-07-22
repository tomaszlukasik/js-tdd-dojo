const readFile = require('./file/readFile')(require('fs'));
const extractTickers = require('./file/extractTickers');
const getTickersFromFile = require('./file/getTickersFromFile')({readFile, extractTickers});

var request = require('good-guy-http')();
const fetchPrice = require('./http/fetchPrices')({request});
const getCsv = require('./http/getCsv');
const extractPrice = require('./http/extractPrice');
const getTickerPriceFromYahoo = require('./http/getTickerPriceFromYahoo')({fetchPrice, getCsv, extractPrice});
const getTickerPricesFromYahoo = require('./http/getTickerPrices')(getTickerPriceFromYahoo);

const printReport = (data => console.log(data));

const stockfetch = require('./stockfetch')({getTickersFromFile, getTickerPricesFromYahoo, printReport});

stockfetch('./symbols').catch(console.log);