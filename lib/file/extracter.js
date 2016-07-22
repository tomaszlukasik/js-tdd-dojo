function extract (rawData) {
  if(!rawData || !rawData.trim()) return [];
  return rawData.split('\n');
}

module.exports = {
  extract
};