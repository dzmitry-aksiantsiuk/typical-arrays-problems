
exports.min = function min (array) {
  const minValue = Math.min.apply(null, array)
  return minValue !== Infinity ? minValue : 0;
}

exports.max = function max (array) {
  const maxValue = Math.max.apply(null, array)
  return maxValue !== -Infinity ? maxValue : 0;
}

exports.avg = function avg (array) {
  if (array == null || array.length === 0) return 0;
  return array.reduce((acc, item) => acc + item) / array.length;
}
