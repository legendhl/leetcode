/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let hash = {};
  for (let n of arr) {
    if (hash[n]) return true;
    if (n % 2 === 0) hash[n / 2] = true;
    hash[n * 2] = true;
  }
  return false;
};