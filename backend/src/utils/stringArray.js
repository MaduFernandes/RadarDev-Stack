module.exports = function stringArray(arrayString) {
  return arrayString.split(",").map(tech => tech.trim());
};
