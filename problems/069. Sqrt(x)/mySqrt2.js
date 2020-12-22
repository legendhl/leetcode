/**
 * @param {number} x
 * @return {number}
 * 执行用时： 96 ms , 在所有 JavaScript 提交中击败了 83.05% 的用户
 */
var mySqrt = function(x) {
  let left = 0;
  let right = x;
  while (left < right) {
    let sqrt = Math.ceil((left + right) / 2);
    if (sqrt * sqrt <= x) {
      left = sqrt;
    } else {
      right = sqrt - 1;
    }
  }
  return left;
};
