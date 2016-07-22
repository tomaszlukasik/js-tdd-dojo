function setupReader(opts = {}) {
  const fs = opts.fs || require('fs');

  function read (fileName) {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  return {
    read
  };
}

module.exports = setupReader;