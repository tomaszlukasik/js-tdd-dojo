module.exports = function (fs) {
    return function (file) {
        return new Promise(function (resolve, reject) {
            fs.readFile(file, 'UTF-8', function (err, data) {
                if (err) reject('Cannot read file ' + file);
                else resolve(data);
            });
        });
    }
};