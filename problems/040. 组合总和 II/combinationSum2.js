/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 执行用时： 88 ms , 在所有 JavaScript 提交中击败了 91.34% 的用户
 */
var combinationSum2 = function(candidates, target) {
  let ans = [];
  candidates.sort((a, b) => a - b);
  _combinationSum2(0, [], 0);
  return ans;

  function _combinationSum2(idx, arr, sum) {
    if (sum === target) {
      ans.push(arr.slice());
      return;
    }
    if (idx >= candidates.length || sum > target) return;
    let n = candidates[idx];
    arr.push(n);
    _combinationSum2(idx + 1, arr, sum + n);
    arr.pop();
    while (
      idx + 1 < candidates.length &&
      candidates[idx] === candidates[idx + 1]
    ) {
      idx++;
    }
    _combinationSum2(idx + 1, arr, sum);
  }
};
