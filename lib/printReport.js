const rightPad = require('./rightPad');
const byPrice = (a, b) => {
  if (a[1] < b[1]) { return -1; }
  if (a[1] > b[1]) { return 1; }
  return 0;
};

module.exports = function (results) {
  const title = 'Prices for ticker symbols';

  results.forEach(result => result[1] = parseFloat(result[1]));
  results.sort(byPrice);

  results.forEach(result => console.log(rightPad(result[0], ' ', 5), result[1], '\n'));

  return results;
};