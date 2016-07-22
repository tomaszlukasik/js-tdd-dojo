module.exports = function (str, padChar, length) {
  return str + padChar.repeat(length - str.length);
};