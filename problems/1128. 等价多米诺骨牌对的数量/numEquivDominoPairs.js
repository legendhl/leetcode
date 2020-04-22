/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  let hash = {};
  for (let elem of dominoes) {
    let str = elem[0] + ',' + elem[1];
    let reversed = elem[1] + ',' + elem[0];
    if (hash[str]) {
      hash[str]++;
    } else if (hash[reversed]) {
      hash[reversed]++;
    } else {
      hash[str] = 1;
    }
  }
  let count = 0;
  for (let val of Object.values(hash)) {
    if (val > 1) {
      count += val * (val - 1) / 2;
    }
  }
  return count;
};