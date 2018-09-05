function isExists(value, arr) {
  return arr.some(function(el) {
    return el["title"] === value;
  });
}

module.exports = isExists;
