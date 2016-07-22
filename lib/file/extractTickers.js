module.exports = function (rawData) {
    if(!rawData || !rawData.trim()) return [];
    return rawData.split('\n').filter(validFormat);
};

function validFormat(item) {
    return item.trim().length > 0 && item.indexOf(' ') === -1;
}
