// Given a set of distinct integers, nums, return all possible subsets.
//
// Note: The solution set must not contain duplicate subsets.
//
// For example,
// If nums = [1,2,3], a solution is:
//
// [
//     [3],
//     [1],
//     [2],
//     [1,2,3],
//     [1,3],
//     [2,3],
//     [1,2],
//     []
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let ans = [];
  let n = nums.length;
  function backtrack(idx, arr) {
    if (idx === n) {
      ans.push(arr.slice());
      return;
    }
    arr.push(nums[idx]);
    backtrack(idx + 1, arr);
    arr.pop();
    backtrack(idx + 1, arr);
  }
  backtrack(0, []);
  return ans;
};
