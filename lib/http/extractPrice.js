module.exports = function(csv) {
    const firstDataLine = csv.split('\n')[1];
    const price = firstDataLine.split(',')[1];
    return price;
};