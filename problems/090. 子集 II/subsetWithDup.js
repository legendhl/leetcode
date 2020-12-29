/**
 * @param {number[]} nums
 * @return {number[][]}
 * 执行用时： 96 ms , 在所有 JavaScript 提交中击败了 50.70% 的用户
 * 内存消耗： 39.6 MB , 在所有 JavaScript 提交中击败了 73.95% 的用户
 */

var subsetsWithDup = function(nums) {
  let sorted = nums.sort((a, b) => a - b);
  let ans = [];
  let n = nums.length;
  function backtrack(idx, arr) {
    ans.push(arr.slice());
    for (let i = idx; i < n; i++) {
      arr.push(sorted[i]);
      backtrack(i + 1, arr);
      while (i < n - 1 && sorted[i + 1] === sorted[i]) {
        i++;
      }
      arr.pop();
    }
  }
  backtrack(0, []);
  return ans;
};

var subsetsWithDup = function(nums) {
  let sorted = nums.sort((a, b) => a - b);
  let ans = [];
  let n = nums.length;
  function backtrack(idx, arr) {
    if (idx === n) {
      ans.push(arr.slice());
      return;
    }
    arr.push(sorted[idx]);
    backtrack(idx + 1, arr);
    arr.pop();
    while (idx < n - 1 && sorted[idx + 1] === sorted[idx]) {
      idx++;
    }
    backtrack(idx + 1, arr);
  }
  backtrack(0, []);
  return ans;
};
