// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// For example,
// If n = 4 and k = 2, a solution is:

// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 执行用时： 140 ms , 在所有 JavaScript 提交中击败了 52.90% 的用户
 */
var combine = function(n, k) {
  let ans = [];
  function backtrack(idx, arr) {
    if (arr.length === k) {
      ans.push(arr.slice());
      return;
    }
    for (let i = idx + 1; i <= n; i++) {
      arr.push(i);
      backtrack(i, arr);
      arr.pop();
    }
  }
  backtrack(0, []);
  return ans;
};
