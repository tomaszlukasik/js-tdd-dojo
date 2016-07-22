function extractPrice(response) {
  const body = response.body.split('\n');
  const firstLine = body[1];
  const row = firstLine.split(',');
  return row[1];
}

module.exports = extractPrice;